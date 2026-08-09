# `route53GlobalresolverGlobalResolver` Submodule <a name="`route53GlobalresolverGlobalResolver` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverGlobalResolver <a name="Route53GlobalresolverGlobalResolver" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver awscc_route53globalresolver_global_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_global_resolver

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  regions: typing.List[str],
  client_token: str = None,
  description: str = None,
  ip_address_type: str = None,
  observability_region: str = None,
  tags: IResolvable | typing.List[Route53GlobalresolverGlobalResolverTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | A list of regions the Global Resolver will exist in. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.observabilityRegion">observability_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

A list of regions the Global Resolver will exist in.

This list cannot be updated and will stay fixed for the duration of the Global Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#regions Route53GlobalresolverGlobalResolver#regions}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.clientToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}.

---

##### `observability_region`<sup>Optional</sup> <a name="observability_region" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.observabilityRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetObservabilityRegion">reset_observability_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53GlobalresolverGlobalResolverTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>]

---

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_observability_region` <a name="reset_observability_region" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetObservabilityRegion"></a>

```python
def reset_observability_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_global_resolver

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_global_resolver

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_global_resolver

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_global_resolver

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53GlobalresolverGlobalResolver to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53GlobalresolverGlobalResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverGlobalResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.globalResolverId">global_resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv4Addresses">i_pv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv6Addresses">i_pv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList">Route53GlobalresolverGlobalResolverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegionInput">observability_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegion">observability_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `global_resolver_id`<sup>Required</sup> <a name="global_resolver_id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.globalResolverId"></a>

```python
global_resolver_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `i_pv4_addresses`<sup>Required</sup> <a name="i_pv4_addresses" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv4Addresses"></a>

```python
i_pv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `i_pv6_addresses`<sup>Required</sup> <a name="i_pv6_addresses" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv6Addresses"></a>

```python
i_pv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tags"></a>

```python
tags: Route53GlobalresolverGlobalResolverTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList">Route53GlobalresolverGlobalResolverTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `observability_region_input`<sup>Optional</sup> <a name="observability_region_input" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegionInput"></a>

```python
observability_region_input: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53GlobalresolverGlobalResolverTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `observability_region`<sup>Required</sup> <a name="observability_region" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegion"></a>

```python
observability_region: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverGlobalResolverConfig <a name="Route53GlobalresolverGlobalResolverConfig" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_global_resolver

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  regions: typing.List[str],
  client_token: str = None,
  description: str = None,
  ip_address_type: str = None,
  observability_region: str = None,
  tags: IResolvable | typing.List[Route53GlobalresolverGlobalResolverTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | A list of regions the Global Resolver will exist in. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.observabilityRegion">observability_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

A list of regions the Global Resolver will exist in.

This list cannot be updated and will stay fixed for the duration of the Global Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#regions Route53GlobalresolverGlobalResolver#regions}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}.

---

##### `observability_region`<sup>Optional</sup> <a name="observability_region" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.observabilityRegion"></a>

```python
observability_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53GlobalresolverGlobalResolverTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}.

---

### Route53GlobalresolverGlobalResolverTags <a name="Route53GlobalresolverGlobalResolverTags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_global_resolver

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#key Route53GlobalresolverGlobalResolver#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#value Route53GlobalresolverGlobalResolver#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#key Route53GlobalresolverGlobalResolver#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#value Route53GlobalresolverGlobalResolver#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverGlobalResolverTagsList <a name="Route53GlobalresolverGlobalResolverTagsList" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_global_resolver

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53GlobalresolverGlobalResolverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53GlobalresolverGlobalResolverTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>]

---


### Route53GlobalresolverGlobalResolverTagsOutputReference <a name="Route53GlobalresolverGlobalResolverTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_global_resolver

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53GlobalresolverGlobalResolverTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>

---



