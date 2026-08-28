# `route53ResolverResolverQueryLoggingConfig` Submodule <a name="`route53ResolverResolverQueryLoggingConfig` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverQueryLoggingConfig <a name="Route53ResolverResolverQueryLoggingConfig" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config awscc_route53resolver_resolver_query_logging_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_query_logging_config

route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination_arn: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53ResolverResolverQueryLoggingConfigTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.destinationArn">destination_arn</a></code> | <code>str</code> | destination arn. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | ResolverQueryLogConfigName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.destinationArn"></a>

- *Type:* str

destination arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config#destination_arn Route53ResolverResolverQueryLoggingConfig#destination_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.name"></a>

- *Type:* str

ResolverQueryLogConfigName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config#name Route53ResolverResolverQueryLoggingConfig#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config#tags Route53ResolverResolverQueryLoggingConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetDestinationArn">reset_destination_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53ResolverResolverQueryLoggingConfigTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>]

---

##### `reset_destination_arn` <a name="reset_destination_arn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetDestinationArn"></a>

```python
def reset_destination_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53ResolverResolverQueryLoggingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_query_logging_config

route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_query_logging_config

route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_query_logging_config

route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_query_logging_config

route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53ResolverResolverQueryLoggingConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53ResolverResolverQueryLoggingConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53ResolverResolverQueryLoggingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverQueryLoggingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.associationCount">association_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creatorRequestId">creator_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.resolverQueryLoggingConfigId">resolver_query_logging_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.shareStatus">share_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList">Route53ResolverResolverQueryLoggingConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `association_count`<sup>Required</sup> <a name="association_count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.associationCount"></a>

```python
association_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator_request_id`<sup>Required</sup> <a name="creator_request_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creatorRequestId"></a>

```python
creator_request_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `resolver_query_logging_config_id`<sup>Required</sup> <a name="resolver_query_logging_config_id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.resolverQueryLoggingConfigId"></a>

```python
resolver_query_logging_config_id: str
```

- *Type:* str

---

##### `share_status`<sup>Required</sup> <a name="share_status" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.shareStatus"></a>

```python
share_status: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tags"></a>

```python
tags: Route53ResolverResolverQueryLoggingConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList">Route53ResolverResolverQueryLoggingConfigTagsList</a>

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53ResolverResolverQueryLoggingConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>]

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverQueryLoggingConfigConfig <a name="Route53ResolverResolverQueryLoggingConfigConfig" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_query_logging_config

route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination_arn: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53ResolverResolverQueryLoggingConfigTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.destinationArn">destination_arn</a></code> | <code>str</code> | destination arn. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.name">name</a></code> | <code>str</code> | ResolverQueryLogConfigName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

destination arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config#destination_arn Route53ResolverResolverQueryLoggingConfig#destination_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

ResolverQueryLogConfigName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config#name Route53ResolverResolverQueryLoggingConfig#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53ResolverResolverQueryLoggingConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config#tags Route53ResolverResolverQueryLoggingConfig#tags}

---

### Route53ResolverResolverQueryLoggingConfigTags <a name="Route53ResolverResolverQueryLoggingConfigTags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_query_logging_config

route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config#key Route53ResolverResolverQueryLoggingConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config#value Route53ResolverResolverQueryLoggingConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverResolverQueryLoggingConfigTagsList <a name="Route53ResolverResolverQueryLoggingConfigTagsList" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_query_logging_config

route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53ResolverResolverQueryLoggingConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53ResolverResolverQueryLoggingConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>]

---


### Route53ResolverResolverQueryLoggingConfigTagsOutputReference <a name="Route53ResolverResolverQueryLoggingConfigTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_query_logging_config

route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverResolverQueryLoggingConfigTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>

---



