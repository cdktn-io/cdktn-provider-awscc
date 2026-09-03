# `apigatewayv2DomainName` Submodule <a name="`apigatewayv2DomainName` Submodule" id="@cdktn/provider-awscc.apigatewayv2DomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2DomainName <a name="Apigatewayv2DomainName" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name awscc_apigatewayv2_domain_name}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainName(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  domain_name_configurations: IResolvable | typing.List[Apigatewayv2DomainNameDomainNameConfigurations] = None,
  mutual_tls_authentication: Apigatewayv2DomainNameMutualTlsAuthentication = None,
  routing_mode: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The custom domain name for your API in Amazon API Gateway. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainNameConfigurations">domain_name_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a>]</code> | The domain name configurations. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.mutualTlsAuthentication">mutual_tls_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | The mutual TLS authentication configuration for a custom domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.routingMode">routing_mode</a></code> | <code>str</code> | The routing mode API Gateway uses to route traffic to your APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The collection of tags associated with a domain name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainName"></a>

- *Type:* str

The custom domain name for your API in Amazon API Gateway.

Uppercase letters and the underscore (`_`) character are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}

---

##### `domain_name_configurations`<sup>Optional</sup> <a name="domain_name_configurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainNameConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a>]

The domain name configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#domain_name_configurations Apigatewayv2DomainName#domain_name_configurations}

---

##### `mutual_tls_authentication`<sup>Optional</sup> <a name="mutual_tls_authentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.mutualTlsAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

The mutual TLS authentication configuration for a custom domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}

---

##### `routing_mode`<sup>Optional</sup> <a name="routing_mode" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.routingMode"></a>

- *Type:* str

The routing mode API Gateway uses to route traffic to your APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#routing_mode Apigatewayv2DomainName#routing_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

The collection of tags associated with a domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfigurations">put_domain_name_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication">put_mutual_tls_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetDomainNameConfigurations">reset_domain_name_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetMutualTlsAuthentication">reset_mutual_tls_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetRoutingMode">reset_routing_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_domain_name_configurations` <a name="put_domain_name_configurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfigurations"></a>

```python
def put_domain_name_configurations(
  value: IResolvable | typing.List[Apigatewayv2DomainNameDomainNameConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a>]

---

##### `put_mutual_tls_authentication` <a name="put_mutual_tls_authentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication"></a>

```python
def put_mutual_tls_authentication(
  truststore_uri: str = None,
  truststore_version: str = None
) -> None
```

###### `truststore_uri`<sup>Optional</sup> <a name="truststore_uri" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication.parameter.truststoreUri"></a>

- *Type:* str

An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, ``s3://bucket-name/key-name``.

The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}

---

###### `truststore_version`<sup>Optional</sup> <a name="truststore_version" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication.parameter.truststoreVersion"></a>

- *Type:* str

The version of the S3 object that contains your truststore.

To specify a version, you must have versioning enabled for the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}

---

##### `reset_domain_name_configurations` <a name="reset_domain_name_configurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetDomainNameConfigurations"></a>

```python
def reset_domain_name_configurations() -> None
```

##### `reset_mutual_tls_authentication` <a name="reset_mutual_tls_authentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetMutualTlsAuthentication"></a>

```python
def reset_mutual_tls_authentication() -> None
```

##### `reset_routing_mode` <a name="reset_routing_mode" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetRoutingMode"></a>

```python
def reset_routing_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Apigatewayv2DomainName resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainName.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainName.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainName.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainName.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Apigatewayv2DomainName resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Apigatewayv2DomainName to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Apigatewayv2DomainName that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2DomainName to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameArn">domain_name_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurations">domain_name_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList">Apigatewayv2DomainNameDomainNameConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthentication">mutual_tls_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference">Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.regionalDomainName">regional_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.regionalHostedZoneId">regional_hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurationsInput">domain_name_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthenticationInput">mutual_tls_authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.routingModeInput">routing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.routingMode">routing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name_arn`<sup>Required</sup> <a name="domain_name_arn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameArn"></a>

```python
domain_name_arn: str
```

- *Type:* str

---

##### `domain_name_configurations`<sup>Required</sup> <a name="domain_name_configurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurations"></a>

```python
domain_name_configurations: Apigatewayv2DomainNameDomainNameConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList">Apigatewayv2DomainNameDomainNameConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mutual_tls_authentication`<sup>Required</sup> <a name="mutual_tls_authentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthentication"></a>

```python
mutual_tls_authentication: Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference">Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `regional_domain_name`<sup>Required</sup> <a name="regional_domain_name" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.regionalDomainName"></a>

```python
regional_domain_name: str
```

- *Type:* str

---

##### `regional_hosted_zone_id`<sup>Required</sup> <a name="regional_hosted_zone_id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.regionalHostedZoneId"></a>

```python
regional_hosted_zone_id: str
```

- *Type:* str

---

##### `domain_name_configurations_input`<sup>Optional</sup> <a name="domain_name_configurations_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurationsInput"></a>

```python
domain_name_configurations_input: IResolvable | typing.List[Apigatewayv2DomainNameDomainNameConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a>]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `mutual_tls_authentication_input`<sup>Optional</sup> <a name="mutual_tls_authentication_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthenticationInput"></a>

```python
mutual_tls_authentication_input: IResolvable | Apigatewayv2DomainNameMutualTlsAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---

##### `routing_mode_input`<sup>Optional</sup> <a name="routing_mode_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.routingModeInput"></a>

```python
routing_mode_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `routing_mode`<sup>Required</sup> <a name="routing_mode" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.routingMode"></a>

```python
routing_mode: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2DomainNameConfig <a name="Apigatewayv2DomainNameConfig" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  domain_name_configurations: IResolvable | typing.List[Apigatewayv2DomainNameDomainNameConfigurations] = None,
  mutual_tls_authentication: Apigatewayv2DomainNameMutualTlsAuthentication = None,
  routing_mode: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainName">domain_name</a></code> | <code>str</code> | The custom domain name for your API in Amazon API Gateway. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainNameConfigurations">domain_name_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a>]</code> | The domain name configurations. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.mutualTlsAuthentication">mutual_tls_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | The mutual TLS authentication configuration for a custom domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.routingMode">routing_mode</a></code> | <code>str</code> | The routing mode API Gateway uses to route traffic to your APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The collection of tags associated with a domain name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The custom domain name for your API in Amazon API Gateway.

Uppercase letters and the underscore (`_`) character are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}

---

##### `domain_name_configurations`<sup>Optional</sup> <a name="domain_name_configurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainNameConfigurations"></a>

```python
domain_name_configurations: IResolvable | typing.List[Apigatewayv2DomainNameDomainNameConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a>]

The domain name configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#domain_name_configurations Apigatewayv2DomainName#domain_name_configurations}

---

##### `mutual_tls_authentication`<sup>Optional</sup> <a name="mutual_tls_authentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.mutualTlsAuthentication"></a>

```python
mutual_tls_authentication: Apigatewayv2DomainNameMutualTlsAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

The mutual TLS authentication configuration for a custom domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}

---

##### `routing_mode`<sup>Optional</sup> <a name="routing_mode" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.routingMode"></a>

```python
routing_mode: str
```

- *Type:* str

The routing mode API Gateway uses to route traffic to your APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#routing_mode Apigatewayv2DomainName#routing_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The collection of tags associated with a domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}

---

### Apigatewayv2DomainNameDomainNameConfigurations <a name="Apigatewayv2DomainNameDomainNameConfigurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations(
  certificate_arn: str = None,
  certificate_name: str = None,
  endpoint_type: str = None,
  ip_address_type: str = None,
  ownership_verification_certificate_arn: str = None,
  security_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.certificateArn">certificate_arn</a></code> | <code>str</code> | An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.certificateName">certificate_name</a></code> | <code>str</code> | The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.endpointType">endpoint_type</a></code> | <code>str</code> | The endpoint type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address types that can invoke the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.ownershipVerificationCertificateArn">ownership_verification_certificate_arn</a></code> | <code>str</code> | The Amazon resource name (ARN) for the public certificate issued by ACMlong. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.securityPolicy">security_policy</a></code> | <code>str</code> | The Transport Layer Security (TLS) version of the security policy for this domain name. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name.

AWS Certificate Manager is the only supported source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#certificate_arn Apigatewayv2DomainName#certificate_arn}

---

##### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#certificate_name Apigatewayv2DomainName#certificate_name}

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

The endpoint type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#endpoint_type Apigatewayv2DomainName#endpoint_type}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

The IP address types that can invoke the domain name.

Use `ipv4` to allow only IPv4 addresses to invoke your domain name, or use `dualstack` to allow both IPv4 and IPv6 addresses to invoke your domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#ip_address_type Apigatewayv2DomainName#ip_address_type}

---

##### `ownership_verification_certificate_arn`<sup>Optional</sup> <a name="ownership_verification_certificate_arn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.ownershipVerificationCertificateArn"></a>

```python
ownership_verification_certificate_arn: str
```

- *Type:* str

The Amazon resource name (ARN) for the public certificate issued by ACMlong.

This ARN is used to validate custom domain ownership. It's required only if you configure mutual TLS and use either an ACM-imported or a private CA certificate ARN as the regionalCertificateArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#ownership_verification_certificate_arn Apigatewayv2DomainName#ownership_verification_certificate_arn}

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

The Transport Layer Security (TLS) version of the security policy for this domain name.

The valid values are `TLS_1_0` and `TLS_1_2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#security_policy Apigatewayv2DomainName#security_policy}

---

### Apigatewayv2DomainNameMutualTlsAuthentication <a name="Apigatewayv2DomainNameMutualTlsAuthentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication(
  truststore_uri: str = None,
  truststore_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreUri">truststore_uri</a></code> | <code>str</code> | An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, ``s3://bucket-name/key-name``. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreVersion">truststore_version</a></code> | <code>str</code> | The version of the S3 object that contains your truststore. |

---

##### `truststore_uri`<sup>Optional</sup> <a name="truststore_uri" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```python
truststore_uri: str
```

- *Type:* str

An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, ``s3://bucket-name/key-name``.

The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}

---

##### `truststore_version`<sup>Optional</sup> <a name="truststore_version" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```python
truststore_version: str
```

- *Type:* str

The version of the S3 object that contains your truststore.

To specify a version, you must have versioning enabled for the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2DomainNameDomainNameConfigurationsList <a name="Apigatewayv2DomainNameDomainNameConfigurationsList" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2DomainNameDomainNameConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2DomainNameDomainNameConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a>]

---


### Apigatewayv2DomainNameDomainNameConfigurationsOutputReference <a name="Apigatewayv2DomainNameDomainNameConfigurationsOutputReference" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetCertificateName">reset_certificate_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetEndpointType">reset_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetOwnershipVerificationCertificateArn">reset_ownership_verification_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetSecurityPolicy">reset_security_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_certificate_name` <a name="reset_certificate_name" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetCertificateName"></a>

```python
def reset_certificate_name() -> None
```

##### `reset_endpoint_type` <a name="reset_endpoint_type" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetEndpointType"></a>

```python
def reset_endpoint_type() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_ownership_verification_certificate_arn` <a name="reset_ownership_verification_certificate_arn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetOwnershipVerificationCertificateArn"></a>

```python
def reset_ownership_verification_certificate_arn() -> None
```

##### `reset_security_policy` <a name="reset_security_policy" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetSecurityPolicy"></a>

```python
def reset_security_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ownershipVerificationCertificateArnInput">ownership_verification_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.securityPolicyInput">security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ownershipVerificationCertificateArn">ownership_verification_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `ownership_verification_certificate_arn_input`<sup>Optional</sup> <a name="ownership_verification_certificate_arn_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ownershipVerificationCertificateArnInput"></a>

```python
ownership_verification_certificate_arn_input: str
```

- *Type:* str

---

##### `security_policy_input`<sup>Optional</sup> <a name="security_policy_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.securityPolicyInput"></a>

```python
security_policy_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `ownership_verification_certificate_arn`<sup>Required</sup> <a name="ownership_verification_certificate_arn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ownershipVerificationCertificateArn"></a>

```python
ownership_verification_certificate_arn: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2DomainNameDomainNameConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations">Apigatewayv2DomainNameDomainNameConfigurations</a>

---


### Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference <a name="Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreUri">reset_truststore_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">reset_truststore_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_truststore_uri` <a name="reset_truststore_uri" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreUri"></a>

```python
def reset_truststore_uri() -> None
```

##### `reset_truststore_version` <a name="reset_truststore_version" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```python
def reset_truststore_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">truststore_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">truststore_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">truststore_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">truststore_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `truststore_uri_input`<sup>Optional</sup> <a name="truststore_uri_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```python
truststore_uri_input: str
```

- *Type:* str

---

##### `truststore_version_input`<sup>Optional</sup> <a name="truststore_version_input" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```python
truststore_version_input: str
```

- *Type:* str

---

##### `truststore_uri`<sup>Required</sup> <a name="truststore_uri" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```python
truststore_uri: str
```

- *Type:* str

---

##### `truststore_version`<sup>Required</sup> <a name="truststore_version" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```python
truststore_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2DomainNameMutualTlsAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---



