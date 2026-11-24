# `route53GlobalresolverCoreNetworkEndpoint` Submodule <a name="`route53GlobalresolverCoreNetworkEndpoint` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverCoreNetworkEndpoint <a name="Route53GlobalresolverCoreNetworkEndpoint" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint awscc_route53globalresolver_core_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_arn: str,
  global_resolver_id: str,
  ip_addresses: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointIpAddresses],
  client_token: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | The ARN of the AWS Cloud WAN core network to connect. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.globalResolverId">global_resolver_id</a></code> | <code>str</code> | The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.ipAddresses">ip_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>]</code> | The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.coreNetworkArn"></a>

- *Type:* str

The ARN of the AWS Cloud WAN core network to connect.

The core network must be in the same account and AVAILABLE. A core network can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#core_network_arn Route53GlobalresolverCoreNetworkEndpoint#core_network_arn}

---

##### `global_resolver_id`<sup>Required</sup> <a name="global_resolver_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.globalResolverId"></a>

- *Type:* str

The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#global_resolver_id Route53GlobalresolverCoreNetworkEndpoint#global_resolver_id}

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.ipAddresses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>]

The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ip_addresses Route53GlobalresolverCoreNetworkEndpoint#ip_addresses}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.clientToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.name"></a>

- *Type:* str

A name for the core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#name Route53GlobalresolverCoreNetworkEndpoint#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses">put_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ip_addresses` <a name="put_ip_addresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses"></a>

```python
def put_ip_addresses(
  value: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointIpAddresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>]

---

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53GlobalresolverCoreNetworkEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53GlobalresolverCoreNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverCoreNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.availableRegions">available_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId">core_network_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddresses">ip_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList">Route53GlobalresolverCoreNetworkEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList">Route53GlobalresolverCoreNetworkEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArnInput">core_network_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverIdInput">global_resolver_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddressesInput">ip_addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverId">global_resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `available_regions`<sup>Required</sup> <a name="available_regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.availableRegions"></a>

```python
available_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `core_network_endpoint_id`<sup>Required</sup> <a name="core_network_endpoint_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId"></a>

```python
core_network_endpoint_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddresses"></a>

```python
ip_addresses: Route53GlobalresolverCoreNetworkEndpointIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList">Route53GlobalresolverCoreNetworkEndpointIpAddressesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tags"></a>

```python
tags: Route53GlobalresolverCoreNetworkEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList">Route53GlobalresolverCoreNetworkEndpointTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `core_network_arn_input`<sup>Optional</sup> <a name="core_network_arn_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArnInput"></a>

```python
core_network_arn_input: str
```

- *Type:* str

---

##### `global_resolver_id_input`<sup>Optional</sup> <a name="global_resolver_id_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverIdInput"></a>

```python
global_resolver_id_input: str
```

- *Type:* str

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddressesInput"></a>

```python
ip_addresses_input: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `global_resolver_id`<sup>Required</sup> <a name="global_resolver_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverId"></a>

```python
global_resolver_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverCoreNetworkEndpointConfig <a name="Route53GlobalresolverCoreNetworkEndpointConfig" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_arn: str,
  global_resolver_id: str,
  ip_addresses: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointIpAddresses],
  client_token: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | The ARN of the AWS Cloud WAN core network to connect. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.globalResolverId">global_resolver_id</a></code> | <code>str</code> | The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.ipAddresses">ip_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>]</code> | The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.name">name</a></code> | <code>str</code> | A name for the core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

The ARN of the AWS Cloud WAN core network to connect.

The core network must be in the same account and AVAILABLE. A core network can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#core_network_arn Route53GlobalresolverCoreNetworkEndpoint#core_network_arn}

---

##### `global_resolver_id`<sup>Required</sup> <a name="global_resolver_id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.globalResolverId"></a>

```python
global_resolver_id: str
```

- *Type:* str

The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#global_resolver_id Route53GlobalresolverCoreNetworkEndpoint#global_resolver_id}

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.ipAddresses"></a>

```python
ip_addresses: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>]

The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ip_addresses Route53GlobalresolverCoreNetworkEndpoint#ip_addresses}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#name Route53GlobalresolverCoreNetworkEndpoint#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}.

---

### Route53GlobalresolverCoreNetworkEndpointIpAddresses <a name="Route53GlobalresolverCoreNetworkEndpointIpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses(
  dns_label: str,
  region_scope: str,
  ipv4_address: str = None,
  ipv6_address: str = None,
  regions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.dnsLabel">dns_label</a></code> | <code>str</code> | Lowercase DNS label for the IP address. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regionScope">region_scope</a></code> | <code>str</code> | ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regions">regions</a></code> | <code>typing.List[str]</code> | Regions that serve the IP address. |

---

##### `dns_label`<sup>Required</sup> <a name="dns_label" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.dnsLabel"></a>

```python
dns_label: str
```

- *Type:* str

Lowercase DNS label for the IP address.

The service appends the endpoint ID to build the DNS name. The label of an existing IP address cannot be changed; to use a new label, change the IP address too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#dns_label Route53GlobalresolverCoreNetworkEndpoint#dns_label}

---

##### `region_scope`<sup>Required</sup> <a name="region_scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regionScope"></a>

```python
region_scope: str
```

- *Type:* str

ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#region_scope Route53GlobalresolverCoreNetworkEndpoint#region_scope}

---

##### `ipv4_address`<sup>Optional</sup> <a name="ipv4_address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}.

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Regions that serve the IP address.

Required when RegionScope is REGIONAL and not allowed when it is ALL. Must be a subset of AvailableRegions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#regions Route53GlobalresolverCoreNetworkEndpoint#regions}

---

### Route53GlobalresolverCoreNetworkEndpointTags <a name="Route53GlobalresolverCoreNetworkEndpointTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverCoreNetworkEndpointIpAddressesList <a name="Route53GlobalresolverCoreNetworkEndpointIpAddressesList" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>]

---


### Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference <a name="Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv4Address">reset_ipv4_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetRegions">reset_regions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv4_address` <a name="reset_ipv4_address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv4Address"></a>

```python
def reset_ipv4_address() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetRegions"></a>

```python
def reset_regions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabelInput">dns_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScopeInput">region_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel">dns_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope">region_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_label_input`<sup>Optional</sup> <a name="dns_label_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabelInput"></a>

```python
dns_label_input: str
```

- *Type:* str

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `region_scope_input`<sup>Optional</sup> <a name="region_scope_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScopeInput"></a>

```python
region_scope_input: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_label`<sup>Required</sup> <a name="dns_label" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel"></a>

```python
dns_label: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_scope`<sup>Required</sup> <a name="region_scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope"></a>

```python
region_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53GlobalresolverCoreNetworkEndpointIpAddresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>

---


### Route53GlobalresolverCoreNetworkEndpointTagsList <a name="Route53GlobalresolverCoreNetworkEndpointTagsList" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53GlobalresolverCoreNetworkEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53GlobalresolverCoreNetworkEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>]

---


### Route53GlobalresolverCoreNetworkEndpointTagsOutputReference <a name="Route53GlobalresolverCoreNetworkEndpointTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_core_network_endpoint

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53GlobalresolverCoreNetworkEndpointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>

---



