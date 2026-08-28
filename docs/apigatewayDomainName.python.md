# `apigatewayDomainName` Submodule <a name="`apigatewayDomainName` Submodule" id="@cdktn/provider-awscc.apigatewayDomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDomainName <a name="ApigatewayDomainName" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name awscc_apigateway_domain_name}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainName(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate_arn: str = None,
  domain_name: str = None,
  endpoint_access_mode: str = None,
  endpoint_configuration: ApigatewayDomainNameEndpointConfiguration = None,
  mutual_tls_authentication: ApigatewayDomainNameMutualTlsAuthentication = None,
  ownership_verification_certificate_arn: str = None,
  regional_certificate_arn: str = None,
  routing_mode: str = None,
  security_policy: str = None,
  tags: IResolvable | typing.List[ApigatewayDomainNameTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#certificate_arn ApigatewayDomainName#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#domain_name ApigatewayDomainName#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.endpointAccessMode">endpoint_access_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#endpoint_access_mode ApigatewayDomainName#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration">ApigatewayDomainNameEndpointConfiguration</a></code> | The endpoint configuration of this DomainName showing the endpoint types and IP address types of the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.mutualTlsAuthentication">mutual_tls_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication">ApigatewayDomainNameMutualTlsAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#mutual_tls_authentication ApigatewayDomainName#mutual_tls_authentication}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.ownershipVerificationCertificateArn">ownership_verification_certificate_arn</a></code> | <code>str</code> | The ARN of the public certificate issued by ACM to validate ownership of your custom domain. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.regionalCertificateArn">regional_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#regional_certificate_arn ApigatewayDomainName#regional_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.routingMode">routing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#routing_mode ApigatewayDomainName#routing_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.securityPolicy">security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#security_policy ApigatewayDomainName#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#tags ApigatewayDomainName#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#certificate_arn ApigatewayDomainName#certificate_arn}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#domain_name ApigatewayDomainName#domain_name}.

---

##### `endpoint_access_mode`<sup>Optional</sup> <a name="endpoint_access_mode" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.endpointAccessMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#endpoint_access_mode ApigatewayDomainName#endpoint_access_mode}.

---

##### `endpoint_configuration`<sup>Optional</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.endpointConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration">ApigatewayDomainNameEndpointConfiguration</a>

The endpoint configuration of this DomainName showing the endpoint types and IP address types of the domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#endpoint_configuration ApigatewayDomainName#endpoint_configuration}

---

##### `mutual_tls_authentication`<sup>Optional</sup> <a name="mutual_tls_authentication" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.mutualTlsAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication">ApigatewayDomainNameMutualTlsAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#mutual_tls_authentication ApigatewayDomainName#mutual_tls_authentication}.

---

##### `ownership_verification_certificate_arn`<sup>Optional</sup> <a name="ownership_verification_certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.ownershipVerificationCertificateArn"></a>

- *Type:* str

The ARN of the public certificate issued by ACM to validate ownership of your custom domain.

Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the RegionalCertificateArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#ownership_verification_certificate_arn ApigatewayDomainName#ownership_verification_certificate_arn}

---

##### `regional_certificate_arn`<sup>Optional</sup> <a name="regional_certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.regionalCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#regional_certificate_arn ApigatewayDomainName#regional_certificate_arn}.

---

##### `routing_mode`<sup>Optional</sup> <a name="routing_mode" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.routingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#routing_mode ApigatewayDomainName#routing_mode}.

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.securityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#security_policy ApigatewayDomainName#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#tags ApigatewayDomainName#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putEndpointConfiguration">put_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putMutualTlsAuthentication">put_mutual_tls_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetEndpointAccessMode">reset_endpoint_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetEndpointConfiguration">reset_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetMutualTlsAuthentication">reset_mutual_tls_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetOwnershipVerificationCertificateArn">reset_ownership_verification_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetRegionalCertificateArn">reset_regional_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetRoutingMode">reset_routing_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetSecurityPolicy">reset_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint_configuration` <a name="put_endpoint_configuration" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putEndpointConfiguration"></a>

```python
def put_endpoint_configuration(
  ip_address_type: str = None,
  types: typing.List[str] = None
) -> None
```

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putEndpointConfiguration.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#ip_address_type ApigatewayDomainName#ip_address_type}.

---

###### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putEndpointConfiguration.parameter.types"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#types ApigatewayDomainName#types}.

---

##### `put_mutual_tls_authentication` <a name="put_mutual_tls_authentication" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putMutualTlsAuthentication"></a>

```python
def put_mutual_tls_authentication(
  truststore_uri: str = None,
  truststore_version: str = None
) -> None
```

###### `truststore_uri`<sup>Optional</sup> <a name="truststore_uri" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putMutualTlsAuthentication.parameter.truststoreUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#truststore_uri ApigatewayDomainName#truststore_uri}.

---

###### `truststore_version`<sup>Optional</sup> <a name="truststore_version" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putMutualTlsAuthentication.parameter.truststoreVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#truststore_version ApigatewayDomainName#truststore_version}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApigatewayDomainNameTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a>]

---

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_endpoint_access_mode` <a name="reset_endpoint_access_mode" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetEndpointAccessMode"></a>

```python
def reset_endpoint_access_mode() -> None
```

##### `reset_endpoint_configuration` <a name="reset_endpoint_configuration" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetEndpointConfiguration"></a>

```python
def reset_endpoint_configuration() -> None
```

##### `reset_mutual_tls_authentication` <a name="reset_mutual_tls_authentication" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetMutualTlsAuthentication"></a>

```python
def reset_mutual_tls_authentication() -> None
```

##### `reset_ownership_verification_certificate_arn` <a name="reset_ownership_verification_certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetOwnershipVerificationCertificateArn"></a>

```python
def reset_ownership_verification_certificate_arn() -> None
```

##### `reset_regional_certificate_arn` <a name="reset_regional_certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetRegionalCertificateArn"></a>

```python
def reset_regional_certificate_arn() -> None
```

##### `reset_routing_mode` <a name="reset_routing_mode" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetRoutingMode"></a>

```python
def reset_routing_mode() -> None
```

##### `reset_security_policy` <a name="reset_security_policy" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetSecurityPolicy"></a>

```python
def reset_security_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigatewayDomainName resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.isConstruct"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainName.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainName.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainName.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainName.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigatewayDomainName resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigatewayDomainName to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigatewayDomainName that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDomainName to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.distributionDomainName">distribution_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.distributionHostedZoneId">distribution_hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.domainNameArn">domain_name_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference">ApigatewayDomainNameEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.mutualTlsAuthentication">mutual_tls_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference">ApigatewayDomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.regionalDomainName">regional_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.regionalHostedZoneId">regional_hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList">ApigatewayDomainNameTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.endpointAccessModeInput">endpoint_access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.endpointConfigurationInput">endpoint_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration">ApigatewayDomainNameEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.mutualTlsAuthenticationInput">mutual_tls_authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication">ApigatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.ownershipVerificationCertificateArnInput">ownership_verification_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.regionalCertificateArnInput">regional_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.routingModeInput">routing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.securityPolicyInput">security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.endpointAccessMode">endpoint_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.ownershipVerificationCertificateArn">ownership_verification_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.regionalCertificateArn">regional_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.routingMode">routing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `distribution_domain_name`<sup>Required</sup> <a name="distribution_domain_name" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.distributionDomainName"></a>

```python
distribution_domain_name: str
```

- *Type:* str

---

##### `distribution_hosted_zone_id`<sup>Required</sup> <a name="distribution_hosted_zone_id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.distributionHostedZoneId"></a>

```python
distribution_hosted_zone_id: str
```

- *Type:* str

---

##### `domain_name_arn`<sup>Required</sup> <a name="domain_name_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.domainNameArn"></a>

```python
domain_name_arn: str
```

- *Type:* str

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.endpointConfiguration"></a>

```python
endpoint_configuration: ApigatewayDomainNameEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference">ApigatewayDomainNameEndpointConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mutual_tls_authentication`<sup>Required</sup> <a name="mutual_tls_authentication" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.mutualTlsAuthentication"></a>

```python
mutual_tls_authentication: ApigatewayDomainNameMutualTlsAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference">ApigatewayDomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `regional_domain_name`<sup>Required</sup> <a name="regional_domain_name" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.regionalDomainName"></a>

```python
regional_domain_name: str
```

- *Type:* str

---

##### `regional_hosted_zone_id`<sup>Required</sup> <a name="regional_hosted_zone_id" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.regionalHostedZoneId"></a>

```python
regional_hosted_zone_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.tags"></a>

```python
tags: ApigatewayDomainNameTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList">ApigatewayDomainNameTagsList</a>

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `endpoint_access_mode_input`<sup>Optional</sup> <a name="endpoint_access_mode_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.endpointAccessModeInput"></a>

```python
endpoint_access_mode_input: str
```

- *Type:* str

---

##### `endpoint_configuration_input`<sup>Optional</sup> <a name="endpoint_configuration_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.endpointConfigurationInput"></a>

```python
endpoint_configuration_input: IResolvable | ApigatewayDomainNameEndpointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration">ApigatewayDomainNameEndpointConfiguration</a>

---

##### `mutual_tls_authentication_input`<sup>Optional</sup> <a name="mutual_tls_authentication_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.mutualTlsAuthenticationInput"></a>

```python
mutual_tls_authentication_input: IResolvable | ApigatewayDomainNameMutualTlsAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication">ApigatewayDomainNameMutualTlsAuthentication</a>

---

##### `ownership_verification_certificate_arn_input`<sup>Optional</sup> <a name="ownership_verification_certificate_arn_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.ownershipVerificationCertificateArnInput"></a>

```python
ownership_verification_certificate_arn_input: str
```

- *Type:* str

---

##### `regional_certificate_arn_input`<sup>Optional</sup> <a name="regional_certificate_arn_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.regionalCertificateArnInput"></a>

```python
regional_certificate_arn_input: str
```

- *Type:* str

---

##### `routing_mode_input`<sup>Optional</sup> <a name="routing_mode_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.routingModeInput"></a>

```python
routing_mode_input: str
```

- *Type:* str

---

##### `security_policy_input`<sup>Optional</sup> <a name="security_policy_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.securityPolicyInput"></a>

```python
security_policy_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApigatewayDomainNameTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a>]

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `endpoint_access_mode`<sup>Required</sup> <a name="endpoint_access_mode" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.endpointAccessMode"></a>

```python
endpoint_access_mode: str
```

- *Type:* str

---

##### `ownership_verification_certificate_arn`<sup>Required</sup> <a name="ownership_verification_certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.ownershipVerificationCertificateArn"></a>

```python
ownership_verification_certificate_arn: str
```

- *Type:* str

---

##### `regional_certificate_arn`<sup>Required</sup> <a name="regional_certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.regionalCertificateArn"></a>

```python
regional_certificate_arn: str
```

- *Type:* str

---

##### `routing_mode`<sup>Required</sup> <a name="routing_mode" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.routingMode"></a>

```python
routing_mode: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainName.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDomainNameConfig <a name="ApigatewayDomainNameConfig" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainNameConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate_arn: str = None,
  domain_name: str = None,
  endpoint_access_mode: str = None,
  endpoint_configuration: ApigatewayDomainNameEndpointConfiguration = None,
  mutual_tls_authentication: ApigatewayDomainNameMutualTlsAuthentication = None,
  ownership_verification_certificate_arn: str = None,
  regional_certificate_arn: str = None,
  routing_mode: str = None,
  security_policy: str = None,
  tags: IResolvable | typing.List[ApigatewayDomainNameTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#certificate_arn ApigatewayDomainName#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#domain_name ApigatewayDomainName#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.endpointAccessMode">endpoint_access_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#endpoint_access_mode ApigatewayDomainName#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration">ApigatewayDomainNameEndpointConfiguration</a></code> | The endpoint configuration of this DomainName showing the endpoint types and IP address types of the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.mutualTlsAuthentication">mutual_tls_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication">ApigatewayDomainNameMutualTlsAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#mutual_tls_authentication ApigatewayDomainName#mutual_tls_authentication}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.ownershipVerificationCertificateArn">ownership_verification_certificate_arn</a></code> | <code>str</code> | The ARN of the public certificate issued by ACM to validate ownership of your custom domain. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.regionalCertificateArn">regional_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#regional_certificate_arn ApigatewayDomainName#regional_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.routingMode">routing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#routing_mode ApigatewayDomainName#routing_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.securityPolicy">security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#security_policy ApigatewayDomainName#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#tags ApigatewayDomainName#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#certificate_arn ApigatewayDomainName#certificate_arn}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#domain_name ApigatewayDomainName#domain_name}.

---

##### `endpoint_access_mode`<sup>Optional</sup> <a name="endpoint_access_mode" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.endpointAccessMode"></a>

```python
endpoint_access_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#endpoint_access_mode ApigatewayDomainName#endpoint_access_mode}.

---

##### `endpoint_configuration`<sup>Optional</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.endpointConfiguration"></a>

```python
endpoint_configuration: ApigatewayDomainNameEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration">ApigatewayDomainNameEndpointConfiguration</a>

The endpoint configuration of this DomainName showing the endpoint types and IP address types of the domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#endpoint_configuration ApigatewayDomainName#endpoint_configuration}

---

##### `mutual_tls_authentication`<sup>Optional</sup> <a name="mutual_tls_authentication" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.mutualTlsAuthentication"></a>

```python
mutual_tls_authentication: ApigatewayDomainNameMutualTlsAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication">ApigatewayDomainNameMutualTlsAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#mutual_tls_authentication ApigatewayDomainName#mutual_tls_authentication}.

---

##### `ownership_verification_certificate_arn`<sup>Optional</sup> <a name="ownership_verification_certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.ownershipVerificationCertificateArn"></a>

```python
ownership_verification_certificate_arn: str
```

- *Type:* str

The ARN of the public certificate issued by ACM to validate ownership of your custom domain.

Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the RegionalCertificateArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#ownership_verification_certificate_arn ApigatewayDomainName#ownership_verification_certificate_arn}

---

##### `regional_certificate_arn`<sup>Optional</sup> <a name="regional_certificate_arn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.regionalCertificateArn"></a>

```python
regional_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#regional_certificate_arn ApigatewayDomainName#regional_certificate_arn}.

---

##### `routing_mode`<sup>Optional</sup> <a name="routing_mode" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.routingMode"></a>

```python
routing_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#routing_mode ApigatewayDomainName#routing_mode}.

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#security_policy ApigatewayDomainName#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApigatewayDomainNameTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#tags ApigatewayDomainName#tags}.

---

### ApigatewayDomainNameEndpointConfiguration <a name="ApigatewayDomainNameEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration(
  ip_address_type: str = None,
  types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#ip_address_type ApigatewayDomainName#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration.property.types">types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#types ApigatewayDomainName#types}. |

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#ip_address_type ApigatewayDomainName#ip_address_type}.

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#types ApigatewayDomainName#types}.

---

### ApigatewayDomainNameMutualTlsAuthentication <a name="ApigatewayDomainNameMutualTlsAuthentication" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication(
  truststore_uri: str = None,
  truststore_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication.property.truststoreUri">truststore_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#truststore_uri ApigatewayDomainName#truststore_uri}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication.property.truststoreVersion">truststore_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#truststore_version ApigatewayDomainName#truststore_version}. |

---

##### `truststore_uri`<sup>Optional</sup> <a name="truststore_uri" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```python
truststore_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#truststore_uri ApigatewayDomainName#truststore_uri}.

---

##### `truststore_version`<sup>Optional</sup> <a name="truststore_version" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```python
truststore_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#truststore_version ApigatewayDomainName#truststore_version}.

---

### ApigatewayDomainNameTags <a name="ApigatewayDomainNameTags" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainNameTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags.property.key">key</a></code> | <code>str</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags.property.value">value</a></code> | <code>str</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#key ApigatewayDomainName#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name#value ApigatewayDomainName#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDomainNameEndpointConfigurationOutputReference <a name="ApigatewayDomainNameEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.resetTypes">reset_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_types` <a name="reset_types" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.resetTypes"></a>

```python
def reset_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.typesInput">types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration">ApigatewayDomainNameEndpointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `types_input`<sup>Optional</sup> <a name="types_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.typesInput"></a>

```python
types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayDomainNameEndpointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameEndpointConfiguration">ApigatewayDomainNameEndpointConfiguration</a>

---


### ApigatewayDomainNameMutualTlsAuthenticationOutputReference <a name="ApigatewayDomainNameMutualTlsAuthenticationOutputReference" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreUri">reset_truststore_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">reset_truststore_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_truststore_uri` <a name="reset_truststore_uri" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreUri"></a>

```python
def reset_truststore_uri() -> None
```

##### `reset_truststore_version` <a name="reset_truststore_version" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```python
def reset_truststore_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">truststore_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">truststore_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">truststore_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">truststore_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication">ApigatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `truststore_uri_input`<sup>Optional</sup> <a name="truststore_uri_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```python
truststore_uri_input: str
```

- *Type:* str

---

##### `truststore_version_input`<sup>Optional</sup> <a name="truststore_version_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```python
truststore_version_input: str
```

- *Type:* str

---

##### `truststore_uri`<sup>Required</sup> <a name="truststore_uri" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```python
truststore_uri: str
```

- *Type:* str

---

##### `truststore_version`<sup>Required</sup> <a name="truststore_version" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```python
truststore_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayDomainNameMutualTlsAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameMutualTlsAuthentication">ApigatewayDomainNameMutualTlsAuthentication</a>

---


### ApigatewayDomainNameTagsList <a name="ApigatewayDomainNameTagsList" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainNameTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayDomainNameTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigatewayDomainNameTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a>]

---


### ApigatewayDomainNameTagsOutputReference <a name="ApigatewayDomainNameTagsOutputReference" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_domain_name

apigatewayDomainName.ApigatewayDomainNameTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayDomainNameTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainName.ApigatewayDomainNameTags">ApigatewayDomainNameTags</a>

---



