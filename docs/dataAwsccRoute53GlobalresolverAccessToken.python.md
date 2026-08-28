# `dataAwsccRoute53GlobalresolverAccessToken` Submodule <a name="`dataAwsccRoute53GlobalresolverAccessToken` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53GlobalresolverAccessToken <a name="DataAwsccRoute53GlobalresolverAccessToken" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53globalresolver_access_token awscc_route53globalresolver_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_access_token

dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53globalresolver_access_token#id DataAwsccRoute53GlobalresolverAccessToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverAccessToken resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_access_token

dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_access_token

dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_access_token

dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_access_token

dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverAccessToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRoute53GlobalresolverAccessToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRoute53GlobalresolverAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53globalresolver_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53GlobalresolverAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.accessTokenId">access_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.dnsViewId">dns_view_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.globalResolverId">global_resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList">DataAwsccRoute53GlobalresolverAccessTokenTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_token_id`<sup>Required</sup> <a name="access_token_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.accessTokenId"></a>

```python
access_token_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `dns_view_id`<sup>Required</sup> <a name="dns_view_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.dnsViewId"></a>

```python
dns_view_id: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `global_resolver_id`<sup>Required</sup> <a name="global_resolver_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.globalResolverId"></a>

```python
global_resolver_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.tags"></a>

```python
tags: DataAwsccRoute53GlobalresolverAccessTokenTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList">DataAwsccRoute53GlobalresolverAccessTokenTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53GlobalresolverAccessTokenConfig <a name="DataAwsccRoute53GlobalresolverAccessTokenConfig" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_access_token

dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53globalresolver_access_token#id DataAwsccRoute53GlobalresolverAccessToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53GlobalresolverAccessTokenTags <a name="DataAwsccRoute53GlobalresolverAccessTokenTags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_access_token

dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53GlobalresolverAccessTokenTagsList <a name="DataAwsccRoute53GlobalresolverAccessTokenTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_access_token

dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference <a name="DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_access_token

dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTags">DataAwsccRoute53GlobalresolverAccessTokenTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53GlobalresolverAccessTokenTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverAccessToken.DataAwsccRoute53GlobalresolverAccessTokenTags">DataAwsccRoute53GlobalresolverAccessTokenTags</a>

---



