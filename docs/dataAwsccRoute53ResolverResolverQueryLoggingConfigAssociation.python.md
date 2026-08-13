# `dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation` Submodule <a name="`dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation <a name="DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_resolver_query_logging_config_association awscc_route53resolver_resolver_query_logging_config_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_resolver_resolver_query_logging_config_association

dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_resolver_query_logging_config_association#id DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_resolver_resolver_query_logging_config_association

dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_resolver_resolver_query_logging_config_association

dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_resolver_resolver_query_logging_config_association

dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_resolver_resolver_query_logging_config_association

dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_resolver_query_logging_config_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.resolverQueryLogConfigId">resolver_query_log_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.resolverQueryLoggingConfigAssociationId">resolver_query_logging_config_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `resolver_query_log_config_id`<sup>Required</sup> <a name="resolver_query_log_config_id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.resolverQueryLogConfigId"></a>

```python
resolver_query_log_config_id: str
```

- *Type:* str

---

##### `resolver_query_logging_config_association_id`<sup>Required</sup> <a name="resolver_query_logging_config_association_id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.resolverQueryLoggingConfigAssociationId"></a>

```python
resolver_query_logging_config_association_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig <a name="DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_resolver_resolver_query_logging_config_association

dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_resolver_query_logging_config_association#id DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



