# `elasticloadbalancingv2Listener` Submodule <a name="`elasticloadbalancingv2Listener` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2Listener <a name="Elasticloadbalancingv2Listener" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_actions: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActions],
  load_balancer_arn: str,
  alpn_policy: typing.List[str] = None,
  certificates: IResolvable | typing.List[Elasticloadbalancingv2ListenerCertificates] = None,
  listener_attributes: IResolvable | typing.List[Elasticloadbalancingv2ListenerListenerAttributes] = None,
  mutual_authentication: Elasticloadbalancingv2ListenerMutualAuthentication = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  ssl_policy: str = None,
  tags: IResolvable | typing.List[Elasticloadbalancingv2ListenerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.defaultActions">default_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>]</code> | The actions for the default rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.alpnPolicy">alpn_policy</a></code> | <code>typing.List[str]</code> | [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.certificates">certificates</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>]</code> | The default SSL server certificate for a secure listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.listenerAttributes">listener_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>]</code> | The listener attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.mutualAuthentication">mutual_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | The mutual authentication configuration information. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | The protocol for connections from clients to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.sslPolicy">ssl_policy</a></code> | <code>str</code> | [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_actions`<sup>Required</sup> <a name="default_actions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.defaultActions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>]

The actions for the default rule.

You cannot define a condition for a default rule.
To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#default_actions Elasticloadbalancingv2Listener#default_actions}

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.loadBalancerArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#load_balancer_arn Elasticloadbalancingv2Listener#load_balancer_arn}

---

##### `alpn_policy`<sup>Optional</sup> <a name="alpn_policy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.alpnPolicy"></a>

- *Type:* typing.List[str]

[TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#alpn_policy Elasticloadbalancingv2Listener#alpn_policy}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.certificates"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>]

The default SSL server certificate for a secure listener.

You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
For an HTTPS listener, update requires some interruptions. For a TLS listener, update requires no interruption.
To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#certificates Elasticloadbalancingv2Listener#certificates}

---

##### `listener_attributes`<sup>Optional</sup> <a name="listener_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.listenerAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>]

The listener attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#listener_attributes Elasticloadbalancingv2Listener#listener_attributes}

---

##### `mutual_authentication`<sup>Optional</sup> <a name="mutual_authentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.mutualAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

The mutual authentication configuration information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#mutual_authentication Elasticloadbalancingv2Listener#mutual_authentication}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.protocol"></a>

- *Type:* str

The protocol for connections from clients to the load balancer.

For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC. You can’t specify the UDP, TCP_UDP, QUIC, or TCP_QUIC protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

##### `ssl_policy`<sup>Optional</sup> <a name="ssl_policy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.sslPolicy"></a>

- *Type:* str

[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.

For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the *Network Load Balancers Guide*.
[HTTPS listeners] Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic. To decrease the possibility of an interruption if your load balancer is handling a high volume of traffic, create an additional load balancer or request an LCU reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#ssl_policy Elasticloadbalancingv2Listener#ssl_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates">put_certificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions">put_default_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes">put_listener_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication">put_mutual_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetAlpnPolicy">reset_alpn_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetCertificates">reset_certificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetListenerAttributes">reset_listener_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetMutualAuthentication">reset_mutual_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetSslPolicy">reset_ssl_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_certificates` <a name="put_certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates"></a>

```python
def put_certificates(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerCertificates]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>]

---

##### `put_default_actions` <a name="put_default_actions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions"></a>

```python
def put_default_actions(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>]

---

##### `put_listener_attributes` <a name="put_listener_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes"></a>

```python
def put_listener_attributes(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerListenerAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>]

---

##### `put_mutual_authentication` <a name="put_mutual_authentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication"></a>

```python
def put_mutual_authentication(
  advertise_trust_store_ca_names: str = None,
  ignore_client_certificate_expiry: bool | IResolvable = None,
  mode: str = None,
  trust_store_arn: str = None
) -> None
```

###### `advertise_trust_store_ca_names`<sup>Optional</sup> <a name="advertise_trust_store_ca_names" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication.parameter.advertiseTrustStoreCaNames"></a>

- *Type:* str

Indicates whether trust store CA certificate names are advertised.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#advertise_trust_store_ca_names Elasticloadbalancingv2Listener#advertise_trust_store_ca_names}

---

###### `ignore_client_certificate_expiry`<sup>Optional</sup> <a name="ignore_client_certificate_expiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication.parameter.ignoreClientCertificateExpiry"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether expired client certificates are ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#ignore_client_certificate_expiry Elasticloadbalancingv2Listener#ignore_client_certificate_expiry}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication.parameter.mode"></a>

- *Type:* str

The client certificate handling method.

Options are `off`, `passthrough` or `verify`. The default value on initial resource creation is `off`. After mutual authentication is turned on, you must explicitly set the `Mode` to `off` to turn it off; removing the property from your template will not turn it off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#mode Elasticloadbalancingv2Listener#mode}

---

###### `trust_store_arn`<sup>Optional</sup> <a name="trust_store_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication.parameter.trustStoreArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#trust_store_arn Elasticloadbalancingv2Listener#trust_store_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>]

---

##### `reset_alpn_policy` <a name="reset_alpn_policy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetAlpnPolicy"></a>

```python
def reset_alpn_policy() -> None
```

##### `reset_certificates` <a name="reset_certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetCertificates"></a>

```python
def reset_certificates() -> None
```

##### `reset_listener_attributes` <a name="reset_listener_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetListenerAttributes"></a>

```python
def reset_listener_attributes() -> None
```

##### `reset_mutual_authentication` <a name="reset_mutual_authentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetMutualAuthentication"></a>

```python
def reset_mutual_authentication() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_ssl_policy` <a name="reset_ssl_policy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetSslPolicy"></a>

```python
def reset_ssl_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Elasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Elasticloadbalancingv2Listener to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Elasticloadbalancingv2Listener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2Listener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList">Elasticloadbalancingv2ListenerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActions">default_actions</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList">Elasticloadbalancingv2ListenerDefaultActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerArn">listener_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributes">listener_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList">Elasticloadbalancingv2ListenerListenerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthentication">mutual_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference">Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList">Elasticloadbalancingv2ListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicyInput">alpn_policy_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificatesInput">certificates_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActionsInput">default_actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributesInput">listener_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArnInput">load_balancer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthenticationInput">mutual_authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicyInput">ssl_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicy">alpn_policy</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificates"></a>

```python
certificates: Elasticloadbalancingv2ListenerCertificatesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList">Elasticloadbalancingv2ListenerCertificatesList</a>

---

##### `default_actions`<sup>Required</sup> <a name="default_actions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActions"></a>

```python
default_actions: Elasticloadbalancingv2ListenerDefaultActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList">Elasticloadbalancingv2ListenerDefaultActionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

---

##### `listener_attributes`<sup>Required</sup> <a name="listener_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributes"></a>

```python
listener_attributes: Elasticloadbalancingv2ListenerListenerAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList">Elasticloadbalancingv2ListenerListenerAttributesList</a>

---

##### `mutual_authentication`<sup>Required</sup> <a name="mutual_authentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthentication"></a>

```python
mutual_authentication: Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference">Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tags"></a>

```python
tags: Elasticloadbalancingv2ListenerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList">Elasticloadbalancingv2ListenerTagsList</a>

---

##### `alpn_policy_input`<sup>Optional</sup> <a name="alpn_policy_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicyInput"></a>

```python
alpn_policy_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificates_input`<sup>Optional</sup> <a name="certificates_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificatesInput"></a>

```python
certificates_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerCertificates]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>]

---

##### `default_actions_input`<sup>Optional</sup> <a name="default_actions_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActionsInput"></a>

```python
default_actions_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>]

---

##### `listener_attributes_input`<sup>Optional</sup> <a name="listener_attributes_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributesInput"></a>

```python
listener_attributes_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerListenerAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>]

---

##### `load_balancer_arn_input`<sup>Optional</sup> <a name="load_balancer_arn_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArnInput"></a>

```python
load_balancer_arn_input: str
```

- *Type:* str

---

##### `mutual_authentication_input`<sup>Optional</sup> <a name="mutual_authentication_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthenticationInput"></a>

```python
mutual_authentication_input: IResolvable | Elasticloadbalancingv2ListenerMutualAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `ssl_policy_input`<sup>Optional</sup> <a name="ssl_policy_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicyInput"></a>

```python
ssl_policy_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>]

---

##### `alpn_policy`<sup>Required</sup> <a name="alpn_policy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicy"></a>

```python
alpn_policy: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `ssl_policy`<sup>Required</sup> <a name="ssl_policy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2ListenerCertificates <a name="Elasticloadbalancingv2ListenerCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates(
  certificate_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.property.certificateArn">certificate_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the certificate. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#certificate_arn Elasticloadbalancingv2Listener#certificate_arn}

---

### Elasticloadbalancingv2ListenerConfig <a name="Elasticloadbalancingv2ListenerConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_actions: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActions],
  load_balancer_arn: str,
  alpn_policy: typing.List[str] = None,
  certificates: IResolvable | typing.List[Elasticloadbalancingv2ListenerCertificates] = None,
  listener_attributes: IResolvable | typing.List[Elasticloadbalancingv2ListenerListenerAttributes] = None,
  mutual_authentication: Elasticloadbalancingv2ListenerMutualAuthentication = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  ssl_policy: str = None,
  tags: IResolvable | typing.List[Elasticloadbalancingv2ListenerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.defaultActions">default_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>]</code> | The actions for the default rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.alpnPolicy">alpn_policy</a></code> | <code>typing.List[str]</code> | [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.certificates">certificates</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>]</code> | The default SSL server certificate for a secure listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.listenerAttributes">listener_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>]</code> | The listener attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.mutualAuthentication">mutual_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | The mutual authentication configuration information. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.protocol">protocol</a></code> | <code>str</code> | The protocol for connections from clients to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_actions`<sup>Required</sup> <a name="default_actions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.defaultActions"></a>

```python
default_actions: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>]

The actions for the default rule.

You cannot define a condition for a default rule.
To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#default_actions Elasticloadbalancingv2Listener#default_actions}

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#load_balancer_arn Elasticloadbalancingv2Listener#load_balancer_arn}

---

##### `alpn_policy`<sup>Optional</sup> <a name="alpn_policy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.alpnPolicy"></a>

```python
alpn_policy: typing.List[str]
```

- *Type:* typing.List[str]

[TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#alpn_policy Elasticloadbalancingv2Listener#alpn_policy}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.certificates"></a>

```python
certificates: IResolvable | typing.List[Elasticloadbalancingv2ListenerCertificates]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>]

The default SSL server certificate for a secure listener.

You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
For an HTTPS listener, update requires some interruptions. For a TLS listener, update requires no interruption.
To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#certificates Elasticloadbalancingv2Listener#certificates}

---

##### `listener_attributes`<sup>Optional</sup> <a name="listener_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.listenerAttributes"></a>

```python
listener_attributes: IResolvable | typing.List[Elasticloadbalancingv2ListenerListenerAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>]

The listener attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#listener_attributes Elasticloadbalancingv2Listener#listener_attributes}

---

##### `mutual_authentication`<sup>Optional</sup> <a name="mutual_authentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.mutualAuthentication"></a>

```python
mutual_authentication: Elasticloadbalancingv2ListenerMutualAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

The mutual authentication configuration information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#mutual_authentication Elasticloadbalancingv2Listener#mutual_authentication}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol for connections from clients to the load balancer.

For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC. You can’t specify the UDP, TCP_UDP, QUIC, or TCP_QUIC protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

##### `ssl_policy`<sup>Optional</sup> <a name="ssl_policy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.

For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the *Network Load Balancers Guide*.
[HTTPS listeners] Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic. To decrease the possibility of an interruption if your load balancer is handling a high volume of traffic, create an additional load balancer or request an LCU reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#ssl_policy Elasticloadbalancingv2Listener#ssl_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Elasticloadbalancingv2ListenerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}.

---

### Elasticloadbalancingv2ListenerDefaultActions <a name="Elasticloadbalancingv2ListenerDefaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions(
  type: str,
  authenticate_cognito_config: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig = None,
  authenticate_oidc_config: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig = None,
  fixed_response_config: Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig = None,
  forward_config: Elasticloadbalancingv2ListenerDefaultActionsForwardConfig = None,
  jwt_validation_config: Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig = None,
  order: typing.Union[int, float] = None,
  redirect_config: Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig = None,
  target_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.type">type</a></code> | <code>str</code> | The type of action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateCognitoConfig">authenticate_cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateOidcConfig">authenticate_oidc_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.fixedResponseConfig">fixed_response_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | [Application Load Balancer] Information for creating an action that returns a custom HTTP response. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.forwardConfig">forward_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | Information for creating an action that distributes requests among multiple target groups. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.jwtValidationConfig">jwt_validation_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.order">order</a></code> | <code>typing.Union[int, float]</code> | The order for the action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.redirectConfig">redirect_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the target group. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.type"></a>

```python
type: str
```

- *Type:* str

The type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#type Elasticloadbalancingv2Listener#type}

---

##### `authenticate_cognito_config`<sup>Optional</sup> <a name="authenticate_cognito_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateCognitoConfig"></a>

```python
authenticate_cognito_config: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authenticate_cognito_config Elasticloadbalancingv2Listener#authenticate_cognito_config}

---

##### `authenticate_oidc_config`<sup>Optional</sup> <a name="authenticate_oidc_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateOidcConfig"></a>

```python
authenticate_oidc_config: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).

Specify only when `Type` is `authenticate-oidc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authenticate_oidc_config Elasticloadbalancingv2Listener#authenticate_oidc_config}

---

##### `fixed_response_config`<sup>Optional</sup> <a name="fixed_response_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.fixedResponseConfig"></a>

```python
fixed_response_config: Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

[Application Load Balancer] Information for creating an action that returns a custom HTTP response.

Specify only when `Type` is `fixed-response`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#fixed_response_config Elasticloadbalancingv2Listener#fixed_response_config}

---

##### `forward_config`<sup>Optional</sup> <a name="forward_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.forwardConfig"></a>

```python
forward_config: Elasticloadbalancingv2ListenerDefaultActionsForwardConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

Information for creating an action that distributes requests among multiple target groups.

Specify only when `Type` is `forward`.
If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#forward_config Elasticloadbalancingv2Listener#forward_config}

---

##### `jwt_validation_config`<sup>Optional</sup> <a name="jwt_validation_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.jwtValidationConfig"></a>

```python
jwt_validation_config: Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

[HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#jwt_validation_config Elasticloadbalancingv2Listener#jwt_validation_config}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The order for the action.

This value is required for rules with multiple actions. The action with the lowest value for order is performed first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#order Elasticloadbalancingv2Listener#order}

---

##### `redirect_config`<sup>Optional</sup> <a name="redirect_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.redirectConfig"></a>

```python
redirect_config: Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

[Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#redirect_config Elasticloadbalancingv2Listener#redirect_config}

---

##### `target_group_arn`<sup>Optional</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the target group.

Specify only when `Type` is `forward` and you want to route to a single target group. To route to multiple target groups, you must use `ForwardConfig` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#target_group_arn Elasticloadbalancingv2Listener#target_group_arn}

---

### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig(
  authentication_request_extra_params: typing.Mapping[str] = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: str = None,
  user_pool_arn: str = None,
  user_pool_client_id: str = None,
  user_pool_domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.scope">scope</a></code> | <code>str</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionTimeout">session_timeout</a></code> | <code>str</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon Cognito user pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolClientId">user_pool_client_id</a></code> | <code>str</code> | The ID of the Amazon Cognito user pool client. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | The domain prefix or fully-qualified domain name of the Amazon Cognito user pool. |

---

##### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params Elasticloadbalancingv2Listener#authentication_request_extra_params}

---

##### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request Elasticloadbalancingv2Listener#on_unauthenticated_request}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#scope Elasticloadbalancingv2Listener#scope}

---

##### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_cookie_name Elasticloadbalancingv2Listener#session_cookie_name}

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionTimeout"></a>

```python
session_timeout: str
```

- *Type:* str

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_timeout Elasticloadbalancingv2Listener#session_timeout}

---

##### `user_pool_arn`<sup>Optional</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_pool_arn Elasticloadbalancingv2Listener#user_pool_arn}

---

##### `user_pool_client_id`<sup>Optional</sup> <a name="user_pool_client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolClientId"></a>

```python
user_pool_client_id: str
```

- *Type:* str

The ID of the Amazon Cognito user pool client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_pool_client_id Elasticloadbalancingv2Listener#user_pool_client_id}

---

##### `user_pool_domain`<sup>Optional</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_pool_domain Elasticloadbalancingv2Listener#user_pool_domain}

---

### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig(
  authentication_request_extra_params: typing.Mapping[str] = None,
  authorization_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  issuer: str = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: str = None,
  token_endpoint: str = None,
  use_existing_client_secret: bool | IResolvable = None,
  user_info_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | The authorization endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientId">client_id</a></code> | <code>str</code> | The OAuth 2.0 client identifier. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.issuer">issuer</a></code> | <code>str</code> | The OIDC issuer identifier of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.scope">scope</a></code> | <code>str</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionTimeout">session_timeout</a></code> | <code>str</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.useExistingClientSecret">use_existing_client_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to use the existing client secret when modifying a rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | The user info endpoint of the IdP. |

---

##### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params Elasticloadbalancingv2Listener#authentication_request_extra_params}

---

##### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

The authorization endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authorization_endpoint Elasticloadbalancingv2Listener#authorization_endpoint}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The OAuth 2.0 client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#client_id Elasticloadbalancingv2Listener#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#client_secret Elasticloadbalancingv2Listener#client_secret}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The OIDC issuer identifier of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}

---

##### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request Elasticloadbalancingv2Listener#on_unauthenticated_request}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#scope Elasticloadbalancingv2Listener#scope}

---

##### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_cookie_name Elasticloadbalancingv2Listener#session_cookie_name}

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionTimeout"></a>

```python
session_timeout: str
```

- *Type:* str

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_timeout Elasticloadbalancingv2Listener#session_timeout}

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#token_endpoint Elasticloadbalancingv2Listener#token_endpoint}

---

##### `use_existing_client_secret`<sup>Optional</sup> <a name="use_existing_client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.useExistingClientSecret"></a>

```python
use_existing_client_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to use the existing client secret when modifying a rule.

If you are creating a rule, you can omit this parameter or set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#use_existing_client_secret Elasticloadbalancingv2Listener#use_existing_client_secret}

---

##### `user_info_endpoint`<sup>Optional</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

The user info endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_info_endpoint Elasticloadbalancingv2Listener#user_info_endpoint}

---

### Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig(
  content_type: str = None,
  message_body: str = None,
  status_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.contentType">content_type</a></code> | <code>str</code> | The content type.  Valid Values: text/plain \| text/css \| text/html \| application/javascript \| application/json. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.messageBody">message_body</a></code> | <code>str</code> | The message. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.statusCode">status_code</a></code> | <code>str</code> | The HTTP response code (2XX, 4XX, or 5XX). |

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The content type.  Valid Values: text/plain | text/css | text/html | application/javascript | application/json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#content_type Elasticloadbalancingv2Listener#content_type}

---

##### `message_body`<sup>Optional</sup> <a name="message_body" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

The message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#message_body Elasticloadbalancingv2Listener#message_body}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

The HTTP response code (2XX, 4XX, or 5XX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#status_code Elasticloadbalancingv2Listener#status_code}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig(
  target_groups: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups] = None,
  target_group_stickiness_config: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroups">target_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>]</code> | Information about how traffic will be distributed between multiple target groups in a forward rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroupStickinessConfig">target_group_stickiness_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | Information about the target group stickiness for a rule. |

---

##### `target_groups`<sup>Optional</sup> <a name="target_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroups"></a>

```python
target_groups: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>]

Information about how traffic will be distributed between multiple target groups in a forward rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#target_groups Elasticloadbalancingv2Listener#target_groups}

---

##### `target_group_stickiness_config`<sup>Optional</sup> <a name="target_group_stickiness_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroupStickinessConfig"></a>

```python
target_group_stickiness_config: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

Information about the target group stickiness for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#target_group_stickiness_config Elasticloadbalancingv2Listener#target_group_stickiness_config}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups(
  target_group_arn: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The weight. The range is 0 to 999. |

---

##### `target_group_arn`<sup>Optional</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#target_group_arn Elasticloadbalancingv2Listener#target_group_arn}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The weight. The range is 0 to 999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#weight Elasticloadbalancingv2Listener#weight}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig(
  duration_seconds: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether target group stickiness is enabled. |

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

[Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group.

The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#duration_seconds Elasticloadbalancingv2Listener#duration_seconds}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether target group stickiness is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#enabled Elasticloadbalancingv2Listener#enabled}

---

### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig(
  additional_claims: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims] = None,
  issuer: str = None,
  jwks_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.additionalClaims">additional_claims</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#additional_claims Elasticloadbalancingv2Listener#additional_claims}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.jwksEndpoint">jwks_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#jwks_endpoint Elasticloadbalancingv2Listener#jwks_endpoint}. |

---

##### `additional_claims`<sup>Optional</sup> <a name="additional_claims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.additionalClaims"></a>

```python
additional_claims: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#additional_claims Elasticloadbalancingv2Listener#additional_claims}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}.

---

##### `jwks_endpoint`<sup>Optional</sup> <a name="jwks_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.jwksEndpoint"></a>

```python
jwks_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#jwks_endpoint Elasticloadbalancingv2Listener#jwks_endpoint}.

---

### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims(
  format: str = None,
  name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.format">format</a></code> | <code>str</code> | The format of the claim value. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.name">name</a></code> | <code>str</code> | The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.values">values</a></code> | <code>typing.List[str]</code> | The claim value. |

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.format"></a>

```python
format: str
```

- *Type:* str

The format of the claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#format Elasticloadbalancingv2Listener#format}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#name Elasticloadbalancingv2Listener#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The claim value.

The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is `space-separated-values`, the values can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#values Elasticloadbalancingv2Listener#values}

---

### Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig(
  host: str = None,
  path: str = None,
  port: str = None,
  protocol: str = None,
  query: str = None,
  status_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.host">host</a></code> | <code>str</code> | The hostname. This component is not percent-encoded. The hostname can contain #{host}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.path">path</a></code> | <code>str</code> | The absolute path, starting with the leading "/". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.port">port</a></code> | <code>str</code> | The port. You can specify a value from 1 to 65535 or #{port}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.protocol">protocol</a></code> | <code>str</code> | The protocol. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.query">query</a></code> | <code>str</code> | The query parameters, URL-encoded when necessary, but not percent-encoded. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.statusCode">status_code</a></code> | <code>str</code> | The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302). |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The hostname. This component is not percent-encoded. The hostname can contain #{host}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#host Elasticloadbalancingv2Listener#host}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The absolute path, starting with the leading "/".

This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#path Elasticloadbalancingv2Listener#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.port"></a>

```python
port: str
```

- *Type:* str

The port. You can specify a value from 1 to 65535 or #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol.

You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.query"></a>

```python
query: str
```

- *Type:* str

The query parameters, URL-encoded when necessary, but not percent-encoded.

Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#query Elasticloadbalancingv2Listener#query}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#status_code Elasticloadbalancingv2Listener#status_code}

---

### Elasticloadbalancingv2ListenerListenerAttributes <a name="Elasticloadbalancingv2ListenerListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.key">key</a></code> | <code>str</code> | The name of the attribute. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.value">value</a></code> | <code>str</code> | The value of the attribute. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.key"></a>

```python
key: str
```

- *Type:* str

The name of the attribute.

The following attribute is supported by Network Load Balancers, and Gateway Load Balancers.

* `tcp.idle_timeout.seconds` - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds.

The following attributes are only supported by Application Load Balancers.

* `routing.http.request.x_amzn_mtls_clientcert_serial_number.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Serial-Number* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_issuer.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Issuer* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_subject.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Subject* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_validity.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Validity* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_leaf.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Leaf* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert* HTTP request header.
* `routing.http.request.x_amzn_tls_version.header_name` - Enables you to modify the header name of the *X-Amzn-Tls-Version* HTTP request header.
* `routing.http.request.x_amzn_tls_cipher_suite.header_name` - Enables you to modify the header name of the *X-Amzn-Tls-Cipher-Suite* HTTP request header.
* `routing.http.response.server.enabled` - Enables you to allow or remove the HTTP response server header.
* `routing.http.response.strict_transport_security.header_value` - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.
* `routing.http.response.access_control_allow_origin.header_value` - Specifies which origins are allowed to access the server.
* `routing.http.response.access_control_allow_methods.header_value` - Returns which HTTP methods are allowed when accessing the server from a different origin.
* `routing.http.response.access_control_allow_headers.header_value` - Specifies which headers can be used during the request.
* `routing.http.response.access_control_allow_credentials.header_value` - Indicates whether the browser should include credentials such as cookies or authentication when making requests.
* `routing.http.response.access_control_expose_headers.header_value` - Returns which headers the browser can expose to the requesting client.
* `routing.http.response.access_control_max_age.header_value` - Specifies how long the results of a preflight request can be cached, in seconds.
* `routing.http.response.content_security_policy.header_value` - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats.
* `routing.http.response.x_content_type_options.header_value` - Indicates whether the MIME types advertised in the *Content-Type* headers should be followed and not be changed.
* `routing.http.response.x_frame_options.header_value` - Indicates whether the browser is allowed to render a page in a *frame*, *iframe*, *embed* or *object*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#key Elasticloadbalancingv2Listener#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#value Elasticloadbalancingv2Listener#value}

---

### Elasticloadbalancingv2ListenerMutualAuthentication <a name="Elasticloadbalancingv2ListenerMutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication(
  advertise_trust_store_ca_names: str = None,
  ignore_client_certificate_expiry: bool | IResolvable = None,
  mode: str = None,
  trust_store_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.advertiseTrustStoreCaNames">advertise_trust_store_ca_names</a></code> | <code>str</code> | Indicates whether trust store CA certificate names are advertised. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.ignoreClientCertificateExpiry">ignore_client_certificate_expiry</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether expired client certificates are ignored. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.mode">mode</a></code> | <code>str</code> | The client certificate handling method. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the trust store. |

---

##### `advertise_trust_store_ca_names`<sup>Optional</sup> <a name="advertise_trust_store_ca_names" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.advertiseTrustStoreCaNames"></a>

```python
advertise_trust_store_ca_names: str
```

- *Type:* str

Indicates whether trust store CA certificate names are advertised.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#advertise_trust_store_ca_names Elasticloadbalancingv2Listener#advertise_trust_store_ca_names}

---

##### `ignore_client_certificate_expiry`<sup>Optional</sup> <a name="ignore_client_certificate_expiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.ignoreClientCertificateExpiry"></a>

```python
ignore_client_certificate_expiry: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether expired client certificates are ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#ignore_client_certificate_expiry Elasticloadbalancingv2Listener#ignore_client_certificate_expiry}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.mode"></a>

```python
mode: str
```

- *Type:* str

The client certificate handling method.

Options are `off`, `passthrough` or `verify`. The default value on initial resource creation is `off`. After mutual authentication is turned on, you must explicitly set the `Mode` to `off` to turn it off; removing the property from your template will not turn it off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#mode Elasticloadbalancingv2Listener#mode}

---

##### `trust_store_arn`<sup>Optional</sup> <a name="trust_store_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.trustStoreArn"></a>

```python
trust_store_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#trust_store_arn Elasticloadbalancingv2Listener#trust_store_arn}

---

### Elasticloadbalancingv2ListenerTags <a name="Elasticloadbalancingv2ListenerTags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#key Elasticloadbalancingv2Listener#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#value Elasticloadbalancingv2Listener#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2ListenerCertificatesList <a name="Elasticloadbalancingv2ListenerCertificatesList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerCertificates]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>]

---


### Elasticloadbalancingv2ListenerCertificatesOutputReference <a name="Elasticloadbalancingv2ListenerCertificatesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerCertificates
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams">reset_authentication_request_extra_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest">reset_on_unauthenticated_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName">reset_session_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout">reset_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn">reset_user_pool_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId">reset_user_pool_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain">reset_user_pool_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_request_extra_params` <a name="reset_authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```python
def reset_authentication_request_extra_params() -> None
```

##### `reset_on_unauthenticated_request` <a name="reset_on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```python
def reset_on_unauthenticated_request() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_session_cookie_name` <a name="reset_session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName"></a>

```python
def reset_session_cookie_name() -> None
```

##### `reset_session_timeout` <a name="reset_session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout"></a>

```python
def reset_session_timeout() -> None
```

##### `reset_user_pool_arn` <a name="reset_user_pool_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn"></a>

```python
def reset_user_pool_arn() -> None
```

##### `reset_user_pool_client_id` <a name="reset_user_pool_client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId"></a>

```python
def reset_user_pool_client_id() -> None
```

##### `reset_user_pool_domain` <a name="reset_user_pool_domain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain"></a>

```python
def reset_user_pool_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput">authentication_request_extra_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput">on_unauthenticated_request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput">session_cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput">session_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput">user_pool_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput">user_pool_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput">user_pool_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">user_pool_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params_input`<sup>Optional</sup> <a name="authentication_request_extra_params_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```python
authentication_request_extra_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `on_unauthenticated_request_input`<sup>Optional</sup> <a name="on_unauthenticated_request_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```python
on_unauthenticated_request_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `session_cookie_name_input`<sup>Optional</sup> <a name="session_cookie_name_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput"></a>

```python
session_cookie_name_input: str
```

- *Type:* str

---

##### `session_timeout_input`<sup>Optional</sup> <a name="session_timeout_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput"></a>

```python
session_timeout_input: str
```

- *Type:* str

---

##### `user_pool_arn_input`<sup>Optional</sup> <a name="user_pool_arn_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput"></a>

```python
user_pool_arn_input: str
```

- *Type:* str

---

##### `user_pool_client_id_input`<sup>Optional</sup> <a name="user_pool_client_id_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput"></a>

```python
user_pool_client_id_input: str
```

- *Type:* str

---

##### `user_pool_domain_input`<sup>Optional</sup> <a name="user_pool_domain_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```python
user_pool_domain_input: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```python
session_timeout: str
```

- *Type:* str

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `user_pool_client_id`<sup>Required</sup> <a name="user_pool_client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```python
user_pool_client_id: str
```

- *Type:* str

---

##### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams">reset_authentication_request_extra_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint">reset_authorization_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest">reset_on_unauthenticated_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName">reset_session_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout">reset_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint">reset_token_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret">reset_use_existing_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint">reset_user_info_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_request_extra_params` <a name="reset_authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```python
def reset_authentication_request_extra_params() -> None
```

##### `reset_authorization_endpoint` <a name="reset_authorization_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint"></a>

```python
def reset_authorization_endpoint() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_on_unauthenticated_request` <a name="reset_on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```python
def reset_on_unauthenticated_request() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_session_cookie_name` <a name="reset_session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName"></a>

```python
def reset_session_cookie_name() -> None
```

##### `reset_session_timeout` <a name="reset_session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout"></a>

```python
def reset_session_timeout() -> None
```

##### `reset_token_endpoint` <a name="reset_token_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint"></a>

```python
def reset_token_endpoint() -> None
```

##### `reset_use_existing_client_secret` <a name="reset_use_existing_client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret"></a>

```python
def reset_use_existing_client_secret() -> None
```

##### `reset_user_info_endpoint` <a name="reset_user_info_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint"></a>

```python
def reset_user_info_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput">authentication_request_extra_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput">on_unauthenticated_request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput">session_cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput">session_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput">use_existing_client_secret_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput">user_info_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">use_existing_client_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params_input`<sup>Optional</sup> <a name="authentication_request_extra_params_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```python
authentication_request_extra_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `on_unauthenticated_request_input`<sup>Optional</sup> <a name="on_unauthenticated_request_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```python
on_unauthenticated_request_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `session_cookie_name_input`<sup>Optional</sup> <a name="session_cookie_name_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput"></a>

```python
session_cookie_name_input: str
```

- *Type:* str

---

##### `session_timeout_input`<sup>Optional</sup> <a name="session_timeout_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput"></a>

```python
session_timeout_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `use_existing_client_secret_input`<sup>Optional</sup> <a name="use_existing_client_secret_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput"></a>

```python
use_existing_client_secret_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user_info_endpoint_input`<sup>Optional</sup> <a name="user_info_endpoint_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```python
user_info_endpoint_input: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```python
session_timeout: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `use_existing_client_secret`<sup>Required</sup> <a name="use_existing_client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```python
use_existing_client_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetMessageBody">reset_message_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_type` <a name="reset_content_type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_message_body` <a name="reset_message_body" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetMessageBody"></a>

```python
def reset_message_body() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBodyInput">message_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody">message_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `message_body_input`<sup>Optional</sup> <a name="message_body_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBodyInput"></a>

```python
message_body_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `message_body`<sup>Required</sup> <a name="message_body" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups">put_target_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig">put_target_group_stickiness_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroups">reset_target_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig">reset_target_group_stickiness_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_groups` <a name="put_target_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups"></a>

```python
def put_target_groups(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>]

---

##### `put_target_group_stickiness_config` <a name="put_target_group_stickiness_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig"></a>

```python
def put_target_group_stickiness_config(
  duration_seconds: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig.parameter.durationSeconds"></a>

- *Type:* typing.Union[int, float]

[Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group.

The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#duration_seconds Elasticloadbalancingv2Listener#duration_seconds}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether target group stickiness is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#enabled Elasticloadbalancingv2Listener#enabled}

---

##### `reset_target_groups` <a name="reset_target_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroups"></a>

```python
def reset_target_groups() -> None
```

##### `reset_target_group_stickiness_config` <a name="reset_target_group_stickiness_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig"></a>

```python
def reset_target_group_stickiness_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups">target_groups</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">target_group_stickiness_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupsInput">target_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput">target_group_stickiness_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_groups`<sup>Required</sup> <a name="target_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups"></a>

```python
target_groups: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a>

---

##### `target_group_stickiness_config`<sup>Required</sup> <a name="target_group_stickiness_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```python
target_group_stickiness_config: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `target_groups_input`<sup>Optional</sup> <a name="target_groups_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupsInput"></a>

```python
target_groups_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>]

---

##### `target_group_stickiness_config_input`<sup>Optional</sup> <a name="target_group_stickiness_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput"></a>

```python
target_group_stickiness_config_input: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>]

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn">reset_target_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_group_arn` <a name="reset_target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn"></a>

```python
def reset_target_group_arn() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput">target_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_group_arn_input`<sup>Optional</sup> <a name="target_group_arn_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput"></a>

```python
target_group_arn_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds">reset_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration_seconds` <a name="reset_duration_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds"></a>

```python
def reset_duration_seconds() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput">duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_seconds_input`<sup>Optional</sup> <a name="duration_seconds_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput"></a>

```python
duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>]

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims">put_additional_claims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetAdditionalClaims">reset_additional_claims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetJwksEndpoint">reset_jwks_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_claims` <a name="put_additional_claims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims"></a>

```python
def put_additional_claims(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>]

---

##### `reset_additional_claims` <a name="reset_additional_claims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetAdditionalClaims"></a>

```python
def reset_additional_claims() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_jwks_endpoint` <a name="reset_jwks_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetJwksEndpoint"></a>

```python
def reset_jwks_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims">additional_claims</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaimsInput">additional_claims_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpointInput">jwks_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint">jwks_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_claims`<sup>Required</sup> <a name="additional_claims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```python
additional_claims: Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `additional_claims_input`<sup>Optional</sup> <a name="additional_claims_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaimsInput"></a>

```python
additional_claims_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `jwks_endpoint_input`<sup>Optional</sup> <a name="jwks_endpoint_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpointInput"></a>

```python
jwks_endpoint_input: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jwks_endpoint`<sup>Required</sup> <a name="jwks_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```python
jwks_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsList <a name="Elasticloadbalancingv2ListenerDefaultActionsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerDefaultActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>]

---


### Elasticloadbalancingv2ListenerDefaultActionsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig">put_authenticate_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig">put_authenticate_oidc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig">put_fixed_response_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig">put_forward_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig">put_jwt_validation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig">put_redirect_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateCognitoConfig">reset_authenticate_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateOidcConfig">reset_authenticate_oidc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetFixedResponseConfig">reset_fixed_response_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetForwardConfig">reset_forward_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetJwtValidationConfig">reset_jwt_validation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetRedirectConfig">reset_redirect_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetTargetGroupArn">reset_target_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authenticate_cognito_config` <a name="put_authenticate_cognito_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig"></a>

```python
def put_authenticate_cognito_config(
  authentication_request_extra_params: typing.Mapping[str] = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: str = None,
  user_pool_arn: str = None,
  user_pool_client_id: str = None,
  user_pool_domain: str = None
) -> None
```

###### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.authenticationRequestExtraParams"></a>

- *Type:* typing.Mapping[str]

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params Elasticloadbalancingv2Listener#authentication_request_extra_params}

---

###### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.onUnauthenticatedRequest"></a>

- *Type:* str

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request Elasticloadbalancingv2Listener#on_unauthenticated_request}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.scope"></a>

- *Type:* str

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#scope Elasticloadbalancingv2Listener#scope}

---

###### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.sessionCookieName"></a>

- *Type:* str

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_cookie_name Elasticloadbalancingv2Listener#session_cookie_name}

---

###### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.sessionTimeout"></a>

- *Type:* str

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_timeout Elasticloadbalancingv2Listener#session_timeout}

---

###### `user_pool_arn`<sup>Optional</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.userPoolArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_pool_arn Elasticloadbalancingv2Listener#user_pool_arn}

---

###### `user_pool_client_id`<sup>Optional</sup> <a name="user_pool_client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.userPoolClientId"></a>

- *Type:* str

The ID of the Amazon Cognito user pool client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_pool_client_id Elasticloadbalancingv2Listener#user_pool_client_id}

---

###### `user_pool_domain`<sup>Optional</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.userPoolDomain"></a>

- *Type:* str

The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_pool_domain Elasticloadbalancingv2Listener#user_pool_domain}

---

##### `put_authenticate_oidc_config` <a name="put_authenticate_oidc_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig"></a>

```python
def put_authenticate_oidc_config(
  authentication_request_extra_params: typing.Mapping[str] = None,
  authorization_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  issuer: str = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: str = None,
  token_endpoint: str = None,
  use_existing_client_secret: bool | IResolvable = None,
  user_info_endpoint: str = None
) -> None
```

###### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.authenticationRequestExtraParams"></a>

- *Type:* typing.Mapping[str]

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params Elasticloadbalancingv2Listener#authentication_request_extra_params}

---

###### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.authorizationEndpoint"></a>

- *Type:* str

The authorization endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authorization_endpoint Elasticloadbalancingv2Listener#authorization_endpoint}

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.clientId"></a>

- *Type:* str

The OAuth 2.0 client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#client_id Elasticloadbalancingv2Listener#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.clientSecret"></a>

- *Type:* str

The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#client_secret Elasticloadbalancingv2Listener#client_secret}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.issuer"></a>

- *Type:* str

The OIDC issuer identifier of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}

---

###### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.onUnauthenticatedRequest"></a>

- *Type:* str

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request Elasticloadbalancingv2Listener#on_unauthenticated_request}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.scope"></a>

- *Type:* str

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#scope Elasticloadbalancingv2Listener#scope}

---

###### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.sessionCookieName"></a>

- *Type:* str

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_cookie_name Elasticloadbalancingv2Listener#session_cookie_name}

---

###### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.sessionTimeout"></a>

- *Type:* str

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_timeout Elasticloadbalancingv2Listener#session_timeout}

---

###### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#token_endpoint Elasticloadbalancingv2Listener#token_endpoint}

---

###### `use_existing_client_secret`<sup>Optional</sup> <a name="use_existing_client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.useExistingClientSecret"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to use the existing client secret when modifying a rule.

If you are creating a rule, you can omit this parameter or set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#use_existing_client_secret Elasticloadbalancingv2Listener#use_existing_client_secret}

---

###### `user_info_endpoint`<sup>Optional</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.userInfoEndpoint"></a>

- *Type:* str

The user info endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_info_endpoint Elasticloadbalancingv2Listener#user_info_endpoint}

---

##### `put_fixed_response_config` <a name="put_fixed_response_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig"></a>

```python
def put_fixed_response_config(
  content_type: str = None,
  message_body: str = None,
  status_code: str = None
) -> None
```

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig.parameter.contentType"></a>

- *Type:* str

The content type.  Valid Values: text/plain | text/css | text/html | application/javascript | application/json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#content_type Elasticloadbalancingv2Listener#content_type}

---

###### `message_body`<sup>Optional</sup> <a name="message_body" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig.parameter.messageBody"></a>

- *Type:* str

The message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#message_body Elasticloadbalancingv2Listener#message_body}

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig.parameter.statusCode"></a>

- *Type:* str

The HTTP response code (2XX, 4XX, or 5XX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#status_code Elasticloadbalancingv2Listener#status_code}

---

##### `put_forward_config` <a name="put_forward_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig"></a>

```python
def put_forward_config(
  target_groups: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups] = None,
  target_group_stickiness_config: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig = None
) -> None
```

###### `target_groups`<sup>Optional</sup> <a name="target_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig.parameter.targetGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>]

Information about how traffic will be distributed between multiple target groups in a forward rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#target_groups Elasticloadbalancingv2Listener#target_groups}

---

###### `target_group_stickiness_config`<sup>Optional</sup> <a name="target_group_stickiness_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig.parameter.targetGroupStickinessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

Information about the target group stickiness for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#target_group_stickiness_config Elasticloadbalancingv2Listener#target_group_stickiness_config}

---

##### `put_jwt_validation_config` <a name="put_jwt_validation_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig"></a>

```python
def put_jwt_validation_config(
  additional_claims: IResolvable | typing.List[Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims] = None,
  issuer: str = None,
  jwks_endpoint: str = None
) -> None
```

###### `additional_claims`<sup>Optional</sup> <a name="additional_claims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig.parameter.additionalClaims"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#additional_claims Elasticloadbalancingv2Listener#additional_claims}.

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}.

---

###### `jwks_endpoint`<sup>Optional</sup> <a name="jwks_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig.parameter.jwksEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#jwks_endpoint Elasticloadbalancingv2Listener#jwks_endpoint}.

---

##### `put_redirect_config` <a name="put_redirect_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig"></a>

```python
def put_redirect_config(
  host: str = None,
  path: str = None,
  port: str = None,
  protocol: str = None,
  query: str = None,
  status_code: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig.parameter.host"></a>

- *Type:* str

The hostname. This component is not percent-encoded. The hostname can contain #{host}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#host Elasticloadbalancingv2Listener#host}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig.parameter.path"></a>

- *Type:* str

The absolute path, starting with the leading "/".

This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#path Elasticloadbalancingv2Listener#path}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig.parameter.port"></a>

- *Type:* str

The port. You can specify a value from 1 to 65535 or #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig.parameter.protocol"></a>

- *Type:* str

The protocol.

You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig.parameter.query"></a>

- *Type:* str

The query parameters, URL-encoded when necessary, but not percent-encoded.

Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#query Elasticloadbalancingv2Listener#query}

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig.parameter.statusCode"></a>

- *Type:* str

The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#status_code Elasticloadbalancingv2Listener#status_code}

---

##### `reset_authenticate_cognito_config` <a name="reset_authenticate_cognito_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateCognitoConfig"></a>

```python
def reset_authenticate_cognito_config() -> None
```

##### `reset_authenticate_oidc_config` <a name="reset_authenticate_oidc_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateOidcConfig"></a>

```python
def reset_authenticate_oidc_config() -> None
```

##### `reset_fixed_response_config` <a name="reset_fixed_response_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetFixedResponseConfig"></a>

```python
def reset_fixed_response_config() -> None
```

##### `reset_forward_config` <a name="reset_forward_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetForwardConfig"></a>

```python
def reset_forward_config() -> None
```

##### `reset_jwt_validation_config` <a name="reset_jwt_validation_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetJwtValidationConfig"></a>

```python
def reset_jwt_validation_config() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_redirect_config` <a name="reset_redirect_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetRedirectConfig"></a>

```python
def reset_redirect_config() -> None
```

##### `reset_target_group_arn` <a name="reset_target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetTargetGroupArn"></a>

```python
def reset_target_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig">authenticate_cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig">authenticate_oidc_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig">fixed_response_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig">forward_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig">jwt_validation_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig">redirect_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfigInput">authenticate_cognito_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfigInput">authenticate_oidc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfigInput">fixed_response_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfigInput">forward_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfigInput">jwt_validation_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfigInput">redirect_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArnInput">target_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authenticate_cognito_config`<sup>Required</sup> <a name="authenticate_cognito_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig"></a>

```python
authenticate_cognito_config: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `authenticate_oidc_config`<sup>Required</sup> <a name="authenticate_oidc_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig"></a>

```python
authenticate_oidc_config: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a>

---

##### `fixed_response_config`<sup>Required</sup> <a name="fixed_response_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig"></a>

```python
fixed_response_config: Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a>

---

##### `forward_config`<sup>Required</sup> <a name="forward_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig"></a>

```python
forward_config: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a>

---

##### `jwt_validation_config`<sup>Required</sup> <a name="jwt_validation_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig"></a>

```python
jwt_validation_config: Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a>

---

##### `redirect_config`<sup>Required</sup> <a name="redirect_config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig"></a>

```python
redirect_config: Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a>

---

##### `authenticate_cognito_config_input`<sup>Optional</sup> <a name="authenticate_cognito_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfigInput"></a>

```python
authenticate_cognito_config_input: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---

##### `authenticate_oidc_config_input`<sup>Optional</sup> <a name="authenticate_oidc_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfigInput"></a>

```python
authenticate_oidc_config_input: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---

##### `fixed_response_config_input`<sup>Optional</sup> <a name="fixed_response_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfigInput"></a>

```python
fixed_response_config_input: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---

##### `forward_config_input`<sup>Optional</sup> <a name="forward_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfigInput"></a>

```python
forward_config_input: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---

##### `jwt_validation_config_input`<sup>Optional</sup> <a name="jwt_validation_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfigInput"></a>

```python
jwt_validation_config_input: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect_config_input`<sup>Optional</sup> <a name="redirect_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfigInput"></a>

```python
redirect_config_input: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---

##### `target_group_arn_input`<sup>Optional</sup> <a name="target_group_arn_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArnInput"></a>

```python
target_group_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerDefaultActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---


### Elasticloadbalancingv2ListenerListenerAttributesList <a name="Elasticloadbalancingv2ListenerListenerAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerListenerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerListenerAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>]

---


### Elasticloadbalancingv2ListenerListenerAttributesOutputReference <a name="Elasticloadbalancingv2ListenerListenerAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerListenerAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>

---


### Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference <a name="Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames">reset_advertise_trust_store_ca_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry">reset_ignore_client_certificate_expiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetTrustStoreArn">reset_trust_store_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_advertise_trust_store_ca_names` <a name="reset_advertise_trust_store_ca_names" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames"></a>

```python
def reset_advertise_trust_store_ca_names() -> None
```

##### `reset_ignore_client_certificate_expiry` <a name="reset_ignore_client_certificate_expiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry"></a>

```python
def reset_ignore_client_certificate_expiry() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_trust_store_arn` <a name="reset_trust_store_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetTrustStoreArn"></a>

```python
def reset_trust_store_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput">advertise_trust_store_ca_names_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput">ignore_client_certificate_expiry_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArnInput">trust_store_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames">advertise_trust_store_ca_names</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry">ignore_client_certificate_expiry</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advertise_trust_store_ca_names_input`<sup>Optional</sup> <a name="advertise_trust_store_ca_names_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput"></a>

```python
advertise_trust_store_ca_names_input: str
```

- *Type:* str

---

##### `ignore_client_certificate_expiry_input`<sup>Optional</sup> <a name="ignore_client_certificate_expiry_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput"></a>

```python
ignore_client_certificate_expiry_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `trust_store_arn_input`<sup>Optional</sup> <a name="trust_store_arn_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArnInput"></a>

```python
trust_store_arn_input: str
```

- *Type:* str

---

##### `advertise_trust_store_ca_names`<sup>Required</sup> <a name="advertise_trust_store_ca_names" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames"></a>

```python
advertise_trust_store_ca_names: str
```

- *Type:* str

---

##### `ignore_client_certificate_expiry`<sup>Required</sup> <a name="ignore_client_certificate_expiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry"></a>

```python
ignore_client_certificate_expiry: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `trust_store_arn`<sup>Required</sup> <a name="trust_store_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn"></a>

```python
trust_store_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerMutualAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

---


### Elasticloadbalancingv2ListenerTagsList <a name="Elasticloadbalancingv2ListenerTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>]

---


### Elasticloadbalancingv2ListenerTagsOutputReference <a name="Elasticloadbalancingv2ListenerTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener

elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>

---



