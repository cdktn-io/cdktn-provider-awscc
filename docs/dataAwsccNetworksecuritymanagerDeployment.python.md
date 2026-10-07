# `dataAwsccNetworksecuritymanagerDeployment` Submodule <a name="`dataAwsccNetworksecuritymanagerDeployment` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworksecuritymanagerDeployment <a name="DataAwsccNetworksecuritymanagerDeployment" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_deployment awscc_networksecuritymanager_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_deployment#id DataAwsccNetworksecuritymanagerDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNetworksecuritymanagerDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNetworksecuritymanagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworksecuritymanagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.associatedPolicyList">associated_policy_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList">DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.associatedScopeList">associated_scope_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList">DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentArn">deployment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentConfiguration">deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentDescription">deployment_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentName">deployment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList">DataAwsccNetworksecuritymanagerDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `associated_policy_list`<sup>Required</sup> <a name="associated_policy_list" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.associatedPolicyList"></a>

```python
associated_policy_list: DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList">DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a>

---

##### `associated_scope_list`<sup>Required</sup> <a name="associated_scope_list" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.associatedScopeList"></a>

```python
associated_scope_list: DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList">DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList</a>

---

##### `deployment_arn`<sup>Required</sup> <a name="deployment_arn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentArn"></a>

```python
deployment_arn: str
```

- *Type:* str

---

##### `deployment_configuration`<sup>Required</sup> <a name="deployment_configuration" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentConfiguration"></a>

```python
deployment_configuration: DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a>

---

##### `deployment_description`<sup>Required</sup> <a name="deployment_description" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentDescription"></a>

```python
deployment_description: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.tags"></a>

```python
tags: DataAwsccNetworksecuritymanagerDeploymentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList">DataAwsccNetworksecuritymanagerDeploymentTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct()
```


### DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct()
```


### DataAwsccNetworksecuritymanagerDeploymentConfig <a name="DataAwsccNetworksecuritymanagerDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_deployment#id DataAwsccNetworksecuritymanagerDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration <a name="DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration()
```


### DataAwsccNetworksecuritymanagerDeploymentTags <a name="DataAwsccNetworksecuritymanagerDeploymentTags" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct">DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct">DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>

---


### DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn">scope_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct">DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_arn`<sup>Required</sup> <a name="scope_arn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn"></a>

```python
scope_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct">DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>

---


### DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference <a name="DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility">enable_cross_account_visibility</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration">DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_cross_account_visibility`<sup>Required</sup> <a name="enable_cross_account_visibility" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility"></a>

```python
enable_cross_account_visibility: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration">DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---


### DataAwsccNetworksecuritymanagerDeploymentTagsList <a name="DataAwsccNetworksecuritymanagerDeploymentTagsList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference <a name="DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networksecuritymanager_deployment

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTags">DataAwsccNetworksecuritymanagerDeploymentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworksecuritymanagerDeploymentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTags">DataAwsccNetworksecuritymanagerDeploymentTags</a>

---



