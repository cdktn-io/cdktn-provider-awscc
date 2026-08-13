# `lightsailLoadBalancerTlsCertificate` Submodule <a name="`lightsailLoadBalancerTlsCertificate` Submodule" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailLoadBalancerTlsCertificate <a name="LightsailLoadBalancerTlsCertificate" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate awscc_lightsail_load_balancer_tls_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer_tls_certificate

lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate_domain_name: str,
  certificate_name: str,
  load_balancer_name: str,
  certificate_alternative_names: typing.List[str] = None,
  https_redirection_enabled: bool | IResolvable = None,
  is_attached: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateDomainName">certificate_domain_name</a></code> | <code>str</code> | The domain name (e.g., example.com ) for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateName">certificate_name</a></code> | <code>str</code> | The SSL/TLS certificate name. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateAlternativeNames">certificate_alternative_names</a></code> | <code>typing.List[str]</code> | An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.httpsRedirectionEnabled">https_redirection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.isAttached">is_attached</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the SSL/TLS certificate is attached to the Lightsail load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_domain_name`<sup>Required</sup> <a name="certificate_domain_name" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateDomainName"></a>

- *Type:* str

The domain name (e.g., example.com ) for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_domain_name LightsailLoadBalancerTlsCertificate#certificate_domain_name}

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateName"></a>

- *Type:* str

The SSL/TLS certificate name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_name LightsailLoadBalancerTlsCertificate#certificate_name}

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.loadBalancerName"></a>

- *Type:* str

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#load_balancer_name LightsailLoadBalancerTlsCertificate#load_balancer_name}

---

##### `certificate_alternative_names`<sup>Optional</sup> <a name="certificate_alternative_names" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateAlternativeNames"></a>

- *Type:* typing.List[str]

An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_alternative_names LightsailLoadBalancerTlsCertificate#certificate_alternative_names}

---

##### `https_redirection_enabled`<sup>Optional</sup> <a name="https_redirection_enabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.httpsRedirectionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#https_redirection_enabled LightsailLoadBalancerTlsCertificate#https_redirection_enabled}

---

##### `is_attached`<sup>Optional</sup> <a name="is_attached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.isAttached"></a>

- *Type:* bool | cdktn.IResolvable

When true, the SSL/TLS certificate is attached to the Lightsail load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#is_attached LightsailLoadBalancerTlsCertificate#is_attached}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetCertificateAlternativeNames">reset_certificate_alternative_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetHttpsRedirectionEnabled">reset_https_redirection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetIsAttached">reset_is_attached</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_certificate_alternative_names` <a name="reset_certificate_alternative_names" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetCertificateAlternativeNames"></a>

```python
def reset_certificate_alternative_names() -> None
```

##### `reset_https_redirection_enabled` <a name="reset_https_redirection_enabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetHttpsRedirectionEnabled"></a>

```python
def reset_https_redirection_enabled() -> None
```

##### `reset_is_attached` <a name="reset_is_attached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetIsAttached"></a>

```python
def reset_is_attached() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer_tls_certificate

lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer_tls_certificate

lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer_tls_certificate

lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer_tls_certificate

lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LightsailLoadBalancerTlsCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LightsailLoadBalancerTlsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailLoadBalancerTlsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn">load_balancer_tls_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNamesInput">certificate_alternative_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainNameInput">certificate_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabledInput">https_redirection_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttachedInput">is_attached_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerNameInput">load_balancer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames">certificate_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainName">certificate_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled">https_redirection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttached">is_attached</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_tls_certificate_arn`<sup>Required</sup> <a name="load_balancer_tls_certificate_arn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn"></a>

```python
load_balancer_tls_certificate_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `certificate_alternative_names_input`<sup>Optional</sup> <a name="certificate_alternative_names_input" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNamesInput"></a>

```python
certificate_alternative_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_domain_name_input`<sup>Optional</sup> <a name="certificate_domain_name_input" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainNameInput"></a>

```python
certificate_domain_name_input: str
```

- *Type:* str

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `https_redirection_enabled_input`<sup>Optional</sup> <a name="https_redirection_enabled_input" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabledInput"></a>

```python
https_redirection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_attached_input`<sup>Optional</sup> <a name="is_attached_input" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttachedInput"></a>

```python
is_attached_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `load_balancer_name_input`<sup>Optional</sup> <a name="load_balancer_name_input" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerNameInput"></a>

```python
load_balancer_name_input: str
```

- *Type:* str

---

##### `certificate_alternative_names`<sup>Required</sup> <a name="certificate_alternative_names" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames"></a>

```python
certificate_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_domain_name`<sup>Required</sup> <a name="certificate_domain_name" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainName"></a>

```python
certificate_domain_name: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `https_redirection_enabled`<sup>Required</sup> <a name="https_redirection_enabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled"></a>

```python
https_redirection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_attached`<sup>Required</sup> <a name="is_attached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttached"></a>

```python
is_attached: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailLoadBalancerTlsCertificateConfig <a name="LightsailLoadBalancerTlsCertificateConfig" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer_tls_certificate

lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate_domain_name: str,
  certificate_name: str,
  load_balancer_name: str,
  certificate_alternative_names: typing.List[str] = None,
  https_redirection_enabled: bool | IResolvable = None,
  is_attached: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateDomainName">certificate_domain_name</a></code> | <code>str</code> | The domain name (e.g., example.com ) for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateName">certificate_name</a></code> | <code>str</code> | The SSL/TLS certificate name. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateAlternativeNames">certificate_alternative_names</a></code> | <code>typing.List[str]</code> | An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.httpsRedirectionEnabled">https_redirection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.isAttached">is_attached</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the SSL/TLS certificate is attached to the Lightsail load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_domain_name`<sup>Required</sup> <a name="certificate_domain_name" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateDomainName"></a>

```python
certificate_domain_name: str
```

- *Type:* str

The domain name (e.g., example.com ) for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_domain_name LightsailLoadBalancerTlsCertificate#certificate_domain_name}

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

The SSL/TLS certificate name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_name LightsailLoadBalancerTlsCertificate#certificate_name}

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#load_balancer_name LightsailLoadBalancerTlsCertificate#load_balancer_name}

---

##### `certificate_alternative_names`<sup>Optional</sup> <a name="certificate_alternative_names" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateAlternativeNames"></a>

```python
certificate_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_alternative_names LightsailLoadBalancerTlsCertificate#certificate_alternative_names}

---

##### `https_redirection_enabled`<sup>Optional</sup> <a name="https_redirection_enabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.httpsRedirectionEnabled"></a>

```python
https_redirection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#https_redirection_enabled LightsailLoadBalancerTlsCertificate#https_redirection_enabled}

---

##### `is_attached`<sup>Optional</sup> <a name="is_attached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.isAttached"></a>

```python
is_attached: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, the SSL/TLS certificate is attached to the Lightsail load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#is_attached LightsailLoadBalancerTlsCertificate#is_attached}

---



